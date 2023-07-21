from fastapi import Request, FastAPI
import numpy as np
from pydantic import BaseModel
from networkx.readwrite import json_graph
import networkx as nx
import json

class Input_Params(BaseModel):
    beam_width: int
    start_node: int
    max_depth: int


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


G = read_json_file("/content/graph_with_weights.json")


@app.get("/")
def home():
    return {"message":"working i guess"}


@app.post("/get_translation/")
def beamsearch(in_params : Input_Params):
    return {"best_bundle": beam_search(G, in_params.start_node, in_params.beam_width, in_params.max_depth)}

def beam_search(graph, start_node, beam_width, max_depth ):
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