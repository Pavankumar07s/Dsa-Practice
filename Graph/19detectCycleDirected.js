class Graph {
  constructor(v) {
    this.graph = new Map(); // Implementing graph using Map
    this.visited = Array(v + 1).fill(false);
    this.Pathvisited = Array(v + 1).fill(false);
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
    return false;
  }
}

function main() {
  // Driver Code-The main function
  let v = 10;
  let g = new Graph(v);
  g.addEdge(1, 2);
  g.addEdge(2, 3);
  g.addEdge(3, 4);
  g.addEdge(4, 5);
  g.addEdge(5, 6);
  g.addEdge(3, 7);
  g.addEdge(7, 5);
  g.addEdge(8, 2);
  g.addEdge(8, 8);
  g.addEdge(9, 10);
  g.addEdge(10, 8);

  for (let i = 0; i <= v; i++) {
    if (!g.visited[i]) {
      if (g.Dfs(i)) {
        return `there is the cycle in the graph`;
      }
    }
  }
  return `There is no any cycle in the graph`;
}

console.log(main());
