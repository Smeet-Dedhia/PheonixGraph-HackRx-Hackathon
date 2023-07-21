import numpy as np
from pydantic import BaseModel
import random
from fastapi import Request, FastAPI
import pandas as pd
import re
from pprint import pprint
import networkx as nx
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics.pairwise import cosine_similarity

class Input_Text(BaseModel):
    prod_id: int
  
    
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

Graphtype = nx.DiGraph()
filepath = 'edgelist.txt'
G = nx.read_edgelist(
    filepath,
    comments='#',
    create_using=Graphtype,
    nodetype=int
)

df = pd.read_csv('Bajaj Mall Data - Sheet1.csv')
df = df.set_index('ID')
nodeattrdf = df[['NAME','CATEGORY', 'PRICE', 'AVGRATING']].copy()
nx.set_node_attributes(G, nodeattrdf.to_dict('index'))

def search(s):
  s = s.lower()
  indx = df.index[(df['NAME'].str.contains(s, case = False))==True].tolist()
  #indx = indx.tolist()
  #indx = indx.astype(int)  
  #print(indx)
  dictres={}
  for i in indx:    
    dictres[i] = df.loc[i, 'NAME']
  
  return dictres

def gethighestjaccard(pro_id, finalresult):
  jaccdict = {}
  for i in range(0,len(finalresult)):
    if(pro_id != i):
      tempneighbours = []
      resarray = getclean(finalresult[i])
      jaccdict[finalresult[i]] = jaccard_similarity(finalresult, resarray)
  return jaccdict

def jaccard_similarity(list1, list2):
    intersection = len(list(set(list1).intersection(list2)))
    union = (len(set(list1)) + len(set(list2))) - intersection
    return float(intersection) / union

def showtitles(array):
    titles = []
    for i in range(len(array)):
        titles.append(G.nodes[array[i]]['NAME'])
    return titles

n = list(G.nodes)
n =  np.array(n)
n = np.unique(n)

def getclean(pro_id):
    l = str(list(G.edges(pro_id)))    
    l = l.replace('[','')
    l = l.replace(']','')
    l = l.replace(',','')
    l = l.replace('(','')
    l = l.replace(')','')
    l = l.replace(str(pro_id)+" ", '')
    b = l.split()    
    b = np.array(b)    
    b = b.astype(int)    
    return b
  
@app.get("/")
def home():
    return {"message":"working i guess"}

@app.post("/get_similar/")
def similar(input : Input_Text):
    return {"similar" :similar_fn(input.prod_id)}

@app.post("/get_recommendations/")
def recommendation(input : Input_Text):
    return {"recommendation" :recommendation_fn(input.prod_id)}
  
@app.post("/get_search/")
def search_fn(input: str):
    return {"search results" :search(input)}

def similar_fn(prod_id):
  cat = df.iloc[prod_id]['CATEGORY']
  df1 = df[df['CATEGORY']==cat]  
  rand = random.sample(df1['NAME'].values.tolist(), 3)
  return rand
	

def recommendation_fn(prod_id):
	finalresult = []
	resultarray = np.unique(getclean(prod_id))
	for i in range(1, len(resultarray)):
		if(resultarray[i] in n):
			finalresult.append(resultarray[i])

	finaldictjaccard = gethighestjaccard(prod_id, finalresult)
	finaldictjaccard = dict(sorted(finaldictjaccard.items(), key=lambda item: item[1], reverse = True))
	top5jac = np.array(list(finaldictjaccard.keys()))#[:5]
	return showtitles(top5jac)
