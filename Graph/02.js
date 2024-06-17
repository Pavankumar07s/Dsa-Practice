function createAdjacencyMatrix(graph) {
    const numVertices = graph.length;

    // Initialize the adjacency matrix with zeros
    const adjMatrix = Array.from(Array(numVertices), () => Array(numVertices).fill(0));

    // Fill the adjacency matrix based on the edges in the graph
    for (let i = 0; i < numVertices; ++i) {
        for (let j = 0; j < numVertices; ++j) {
            if (graph[i][j] === 1) {
                adjMatrix[i][j] = 1;
                adjMatrix[j][i] = 1; // For undirected graph, set symmetric entries
            }
        }
    }

    return adjMatrix;
}

// The indices represent the vertices, and the values are lists of neighboring vertices
const graph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];

// Create the adjacency matrix
const adjMatrix = createAdjacencyMatrix(graph);

// Print the adjacency matrix
for (let i = 0; i < adjMatrix.length; ++i) {
    console.log(adjMatrix[i].join(' '));
}
