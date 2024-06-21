// A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labelled with a distinct integer in the range 0 to V - 1.
// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node.
// You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

class Graph {
  constructor(v) {
    this.graph = new Map(); // Implementing graph using Map
    this.visited = Array(v + 1).fill(false);
    this.Pathvisited = Array(v + 1).fill(false);
    this.safenode = [];
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
    this.Pathvisited[src] = 1;
    for (let neighbor of this.graph.get(src) || []) {
      if (!this.visited[neighbor]) {
        if (this.Dfs(neighbor)) {
          return true;
        }
      } else if (this.Pathvisited[neighbor]) {
        return true;
      }
    }
    this.Pathvisited[src] = 0;
    this.safenode.push(src)
    return false;
  }
}

function main() {
  // Driver Code-The main function
  let v = 11;
  let g = new Graph(v);
  g.addEdge(0, 1);
  g.addEdge(1, 2);
  g.addEdge(2, 3);
  g.addEdge(3, 4);
  g.addEdge(3, 5);
  g.addEdge(4, 6);
  g.addEdge(5, 6);
  g.addEdge(6, 7);
  g.addEdge(8, 1);
  g.addEdge(8, 9);
  g.addEdge(9, 10);
  g.addEdge(10, 8);
  g.addEdge(11, 9);

  for (let i = 0; i <= v; i++) {
    if (!g.visited[i]) {
        g.Dfs(i);
    }
  }
  console.log(g.safenode.sort())
}
main()
