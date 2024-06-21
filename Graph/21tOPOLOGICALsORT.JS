// Given an adjacency list for a Directed Acyclic Graph (DAG) where adj_list[i] contains a list of all vertices j such that there is a directed edge from vertex i to vertex j, with  V  vertices and E  edges, your task is to find any valid topological sorting of the graph.
// In a topological sort, for every directed edge u -> v,  u must come before v in the ordering.
// A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labelled with a distinct integer in the range 0 to V - 1.
// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node.
// You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

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
        if (this.Dfs(neighbor)) {
          return true;
        }
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

  console.log(g.Stack);
  console.log(`this is the Topological sort `);
  for (let elem of g.Stack) {
    console.log(`${elem}`);
  }
}
main();
