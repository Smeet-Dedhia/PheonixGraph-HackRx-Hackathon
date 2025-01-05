# PS12-PhoenixGraph

## Problem Statement
Explore how graph representation coupled with graph query and graph machine learning can provide next generation viable business capability. Explore building an end-to-end scalable graph-based capability with GraphML consumption. For this you must explore the SNAP product co-purchasing networks and identify a good problem to solve that will address a potential business use case. The final solution must showcase an integration to a mobile app / web frontend.

## SNAP Dataset
The data was collected by crawling Amazon website and contains product metadata and review information about 548,552 different products (Books, music CDs, DVDs and VHS video tapes).
For each product the following information is available:
- Title
- Salesrank
- List of similar products (that get co-purchased with the current product)
- Detailed product categorization
- Product reviews: time, customer, rating, number of votes, number of people that found the review helpful

## Our approach
Leveraging graph network to create bundles of products and ultimately recommend context relevant products to the user.
This will use Graph Embeddings for the vertices allow for compact representation of the network structure.

### Graph Embeddings
- Creates embeddings which include vertex information as well as its network connections 
- Leverages connectivity of graph data 
- Better than using only Node embeddings which only considers vertex information, ignoring the connectivity

### Cold Start 
- Using titles and categories of a new product to train a supervised model to predict the estimated salesrank (position of product in catalogue) for the product among similar products.
- The ability to be able to predict the salesrank (position of product in catalogue) will help us place the products at a appropriate position among other similar products which will impact overall sales.



##  USP of our approach:
- Identifying Spam and irrelevant product listed by sellers 
- Estimation of Efficient position of a new product among others in catalogue 
- Recommendation based on overall product similarity 
- Multiple metrics (Jaccard and Sorensen-Dice indices) are combined to give robust recommendations within the cluster 
- Helpfulness - User reviews have been considered to determine which products are more trustworthy (confidence)

See the [PheonixGraph Presentation](/PhoenixGraph-Presentation.pdf) for more details!


