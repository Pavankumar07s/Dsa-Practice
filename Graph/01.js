function createAdjacencyList(edges, numVertices) {
    // Initialize the adjacency list
    const adjList = new Array(numVertices).fill(null).map(() => []);

    // Fill the adjacency list based on the edges in the graph
    edges.forEach(([u, v]) => {
        // Since the graph is undirected, push the edges in both directions
        adjList[u].push(v);
        adjList[v].push(u);
    });

    return adjList;
}

// Undirected Graph of 4 nodes
const numVertices = 4;
const edges = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 1]];

// Create the adjacency list
const adjList = createAdjacencyList(edges, numVertices);

// Print the adjacency list
// for (let i = 0; i < numVertices; i++) {
//     console.log(`${i} -> ${adjList[i].join(' ')}`);
// }


// ------------------------------Practice------------------------------------

const createGraph=(v,e)=>{

    const adjGraph=new Array(v).fill(null).map(()=>[]);

    e.forEach(([u,v])=>{
        adjGraph[u].push(v)
        adjGraph[v].push(u)
    })
    
    return adjGraph;
}

const nubOfVertices=4;
const edgesOfGraph = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 1]];

const adjGraph=createGraph(nubOfVertices,edgesOfGraph)


for(i=0;i<nubOfVertices;i++){
    console.log(`${i} ==> ${adjGraph[i].join(" ")}`)
}