// Given an adjacency list for a Directed Acyclic Graph (DAG) where adj_list[i] contains a list of all vertices j such that there is a directed edge from vertex i to vertex j, with  V  vertices and E  edges, your task is to find any valid topological sorting of the graph.
// In a topological sort, for every directed edge u -> v,  u must come before v in the ordering.

class Graph {
  constructor(v) {
    this.graph = new Map(); // Implementing graph using Map
    this.visited = Array(v + 1).fill(false);
    this.Stack = [];
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

  Dfs(src) {
    this.visited[src] = 1;
    for (let neighbor of this.graph.get(src) || []) {
      if (!this.visited[neighbor]) {
        this.Dfs(neighbor);
      }
    }
    this.Stack.unshift(src);
    return false;
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

  for (let i = 0; i < v; i++) {
    if (!g.visited[i]) {
      g.Dfs(i);
    }
  }

  console.log(`this is the Topological sort `);
  for (let elem of g.Stack) {
    console.log(`${elem}`);
  }
}
main();
