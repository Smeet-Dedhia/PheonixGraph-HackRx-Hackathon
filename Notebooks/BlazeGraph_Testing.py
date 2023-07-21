#!/usr/bin/env python
# coding: utf-8

# In[20]:


import requests

blazegraph_url = 'http://localhost:9999/blazegraph/namespace/space/sparql'

# SPARQL SELECT query to retrieve names and investigation start dates
sparql_query = """
PREFIX muellerkg: <http://example.org#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?name ?start_date
WHERE {
  ?indictment a muellerkg:Indictment ;
              muellerkg:name ?name ;
              muellerkg:investigation_start ?start_date .
}
"""

headers = {
    'Accept': 'application/sparql-results+json',
}

response = requests.get(blazegraph_url, headers=headers, params={'query': sparql_query})

if response.status_code == 200:
    
    # Parse the JSON response
    data = response.json()

    # Process the data as needed
    for binding in data['results']['bindings']:
        name = binding['name']['value']
        start_date = binding['start_date']['value']
        print(f"Name: {name}, Start Date: {start_date}")
else:
    print(f"Error: {response.status_code} - {response.text}")


# In[ ]:




