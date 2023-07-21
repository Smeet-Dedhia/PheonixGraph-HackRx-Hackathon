from fastapi import Request, FastAPI
import numpy as np
from pydantic import BaseModel
from networkx.readwrite import json_graph
import networkx as nx
import json
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
    

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def read_json_file(filename):
    with open(filename) as f:
        js_graph = json.load(f)
    return json_graph.node_link_graph(js_graph)


G = read_json_file("./graph_with_weights.json")
n = list(G.nodes)
n =  np.array(n)
n = np.unique(n)
df = pd.read_csv('./GNN_datasets/finalpreprocesseddata.csv')
df = df.dropna()
df = df.set_index('ID')
n_neighbors = {int(i):len(list(G.neighbors(int(i)))) for i in n}
df['n_neighbors'] = df.index.to_series().map(n_neighbors)
remove = [nodes for nodes in dict(G.nodes()) if len(G.nodes[nodes]) == 0]
G.remove_nodes_from(remove)

@app.get("/")
def home():
    return {"message":"working i guess"}

@app.post("/best_bundles/")
def all_bundle():
    return {"best_bundle": best_3_bundles()}

@app.post("/categories/")
def categories(cat : str):
    return {"book_bundle": book_bundles( cat )}

# @app.post("/music/")
# def music():
#     return {"music_bundle": music_bundles()}

# @app.post("/videos/")
# def videos():
#     return {"video_bundle": video_bundles()}

# @app.post("/dvd/")
# def dvds():
#     return {"dvd_bundle": dvd_bundles()}

def best_3_bundles():
    df['n_neighbors'] = df.index.to_series().map(n_neighbors)
    overall_ids = df[df['salesrank'] != -1].sort_values( by = ['n_neighbors', 
                                                               'salesrank', 
                                                               'avg_rating'], ascending = [False, True, False]).index[:3]
    overall_bundles = {}
    for id in overall_ids:
        overall_bundles[id] = beam_search(G, id, 2, 2)
    
    best_bundles = { 0: [],
                    1: [],
                    2: []}
    for key in overall_bundles.keys():
        bb_idx = 0
        for id in list(overall_bundles[key]):
            append_prod = { 'title': G.nodes[ id]['title'],
                           'group': G.nodes[id]['group']}
            best_bundles[bb_idx].append(append_prod)
            bb_idx = bb_idx+1
    
    return best_bundles

# def music_bundles():
#     df['n_neighbors'] = df.index.to_series().map(n_neighbors)
#     overall_ids = list(df[ (df['salesrank'] != -1) & (df['group'] == 'Music')].sort_values( by = ['n_neighbors', 
#                                                                                                  'salesrank',
#                                                                                                  'avg_rating'], ascending = [False, True, False]).index[:3])
#     overall_bundles = {}
#     for id in overall_ids:
#         overall_bundles[id] = beam_search_group(G, id, 4, 2, "Music")
    
#     best_bundles = { 0: [],
#                     1: [],
#                     2: []}
#     for key in overall_bundles.keys():
#         bb_idx = 0
#         for id in list(overall_bundles[key]):
#             append_prod = { 'title': G.nodes[ id]['title'],
#                            'group': G.nodes[id]['group']}
#             best_bundles[bb_idx].append(append_prod)
#             bb_idx = bb_idx+1
    
#     return best_bundles  

def category_bundles( cat ):
    df['n_neighbors'] = df.index.to_series().map(n_neighbors)
    overall_ids = list(df[ (df['salesrank'] != -1) & (df['group'] == cat)].sort_values( by = ['n_neighbors', 
                                                                                                 'salesrank',
                                                                                                 'avg_rating'], ascending = [False, True, False]).index[:3])
    overall_bundles = {}
    for id in overall_ids:
        overall_bundles[id] = beam_search_group(G, id, 2, 2, cat)
    
    best_bundles = { 0: [],
                    1: [],
                    2: []}
    for key in overall_bundles.keys():
        bb_idx = 0
        for id in list(overall_bundles[key]):
            append_prod = { 'title': G.nodes[ id]['title'],
                           'group': G.nodes[id]['group']}
            best_bundles[bb_idx].append(append_prod)
            bb_idx = bb_idx+1
    
    return best_bundles

# def video_bundles():
#     df['n_neighbors'] = df.index.to_series().map(n_neighbors)
#     overall_ids = list(df[ (df['salesrank'] != -1) & (df['group'] == 'Video')].sort_values( by = ['n_neighbors', 
#                                                                                                  'salesrank',
#                                                                                                  'avg_rating'], ascending = [False, True, False]).index[:3])
#     overall_bundles = {}
#     for id in overall_ids:
#         overall_bundles[id] = beam_search_group(G, id, 4, 2, "Video")
    
#     best_bundles = { 0: [],
#                     1: [],
#                     2: []}
#     for key in overall_bundles.keys():
#         bb_idx = 0
#         for id in list(overall_bundles[key]):
#             append_prod = { 'title': G.nodes[ id]['title'],
#                            'group': G.nodes[id]['group']}
#             best_bundles[bb_idx].append(append_prod)
#             bb_idx = bb_idx+1
    
#     return best_bundles

# def dvd_bundles():
#     df['n_neighbors'] = df.index.to_series().map(n_neighbors)
#     overall_ids = df[ (df['salesrank'] != -1) & (df['group'] == 'DVD')].sort_values( by = ['n_neighbors', 
#                                                                                                  'salesrank',
#                                                                                                  'avg_rating'], ascending = [False, True, False]).index[:3]
#     overall_bundles = {}
#     for id in overall_ids:
#         overall_bundles[id] = beam_search_group(G, id, 4, 2, "DVD")
    
#     best_bundles = { 0: [],
#                     1: [],
#                     2: []}
#     for key in overall_bundles.keys():
#         bb_idx = 0
#         for id in list(overall_bundles[key]):
#             append_prod = { 'title': G.nodes[ id]['title'],
#                            'group': G.nodes[id]['group']}
#             best_bundles[bb_idx].append(append_prod)
#             bb_idx = bb_idx+1
    
#     return best_bundles

def beam_search_group(graph, start_node, beam_width, max_depth, group ):
    beam = [([start_node], 0)]
    best_paths = []

    g2 = G.copy()
    
    # Perform beam search until the maximum depth is reached
    for depth in range(max_depth):
        next_beam = []
        for path, path_weight in beam:
            current_node = path[-1]
            # Get the outgoing edges and their weights for the current node
            outgoing_edges = graph.out_edges(current_node, data=True)
            for edge in outgoing_edges:
                if len(edge[2]) == 0:
                  continue
                # if G.nodes[edge[1]] != group:
                #     continue
                #print(G.nodes[edge[1]])
                to_node, edge_weight = edge[1], edge[2]['weight']
                new_path = path + [to_node]
                new_weight = path_weight + edge_weight
                next_beam.append((new_path, new_weight))
        
        # Sort the next_beam based on path weight and select the top beam_width paths
        next_beam.sort(key=lambda x: x[1])
        beam = next_beam[:beam_width]

        best_paths.extend(beam)
    
    return best_paths[-1][0]

def beam_search(graph, start_node, beam_width, max_depth):
    # Initialize the beam with the starting node and its weight as a path
    beam = [([start_node], 0)]
    best_paths = []

    # Perform beam search until the maximum depth is reached
    for depth in range(max_depth):
        next_beam = []
        for path, path_weight in beam:
            current_node = path[-1]
            # Get the outgoing edges and their weights for the current node
            outgoing_edges = graph.out_edges(current_node, data=True)
            for edge in outgoing_edges:
                if len(edge[2]) == 0:
                  continue
                to_node, edge_weight = edge[1], edge[2]['weight']
                new_path = path + [to_node]
                new_weight = path_weight + edge_weight
                next_beam.append((new_path, new_weight))

        # Sort the next_beam based on path weight and select the top beam_width paths
        next_beam.sort(key=lambda x: x[1])
        beam = next_beam[:beam_width]

        best_paths.extend(beam)
    
    return best_paths[-1][0]
