// Given an adjacency list for a Directed Acyclic Graph (DAG) where adj_list[i] contains a list of all vertices j such that there is a directed edge from vertex i to vertex j, with  V  vertices and E  edges, your task is to find any valid topological sorting of the graph.
// In a topological sort, for every directed edge u -> v,  u must come before v in the ordering.
class Graph {
  constructor(v) {
    this.graph = new Map(); // Implementing graph using Map
    this.visited = Array(v + 1).fill(false);
    this.Stack = [];
    this.topologicalOrder = [];
  }

  // Utility function to add edge in an directed graph
  addEdge(a, b) {
    if (this.graph.has(a)) {
      let l = this.graph.get(a);
      l.push(b);
      this.graph.set(a, l);
    } else {
      this.graph.set(a, [b]);
    }
  }

  Bfs(v) {
    let inDegree = Array(v).fill(0);

    // Compute in-degree of each node
    for (let [currentNode, neighbors] of this.graph.entries()) {
      for (let neighbor of neighbors) {
        inDegree[neighbor]++;
      }
    }
    let queue = [];
    for (let i = 0; i < v; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    while (queue.length) {
      let currentNode = queue.shift();
      this.topologicalOrder.push(currentNode);

      if (this.graph.has(currentNode)) {
        for (let neighbor of this.graph.get(currentNode)) {
          inDegree[neighbor]--;
          if (inDegree[neighbor] === 0) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
}

function main() {
  // Driver Code-The main function
  let v = 6;
  let g = new Graph(v);
  g.addEdge(5, 0);
  g.addEdge(5, 2);
  g.addEdge(2, 3);
  g.addEdge(3, 1);
  g.addEdge(4, 1);
  g.addEdge(4, 0);

  g.Bfs(v);

  console.log(g.topologicalOrder);
}
main();
