class Graph {
  constructor() {
    this.graph = new Map(); // Implementing graph using Map
  }

  // utility function to add edge in an undirected graph
  addEdge(a, b) {
    if (this.graph.has(a)) {
      let l = this.graph.get(a);
      l.push(b);
      this.graph.set(a, l);
    } else {
      this.graph.set(a, [b]);
    }

    // Since this is an undirected graph, add edge in both directions
    if (this.graph.has(b)) {
      let l = this.graph.get(b);
      l.push(a);
      this.graph.set(b, l);
    } else {
      this.graph.set(b, [a]);
    }
  }

  Dfs(src, colorList, color) {
    colorList[src] = color;
    for (let neighbours of this.graph.get(src)) {
      if (colorList[neighbours] == -1) {
        if (!this.Dfs(neighbours, colorList, 1 - color)) {
          return false;
        }
      } 
      else if (colorList[neighbours] === color) {
        return false;
      }
    }
    return true;
  }
}

function main() {
  // Driver Code-The main function
  let g = new Graph();
  let v = 8;
  let colorList = Array(v + 1).fill(-1);
  let color = 0;

  g.addEdge(1, 2);
  g.addEdge(2, 3);
  g.addEdge(2, 6);
  g.addEdge(3, 4);
  g.addEdge(6, 5);
  g.addEdge(5, 4);
  g.addEdge(4, 7);
  g.addEdge(7, 8);

  for (let i = 1; i <= v; i++) {
    if (colorList[i] == -1) {
      if (!g.Dfs(i, colorList, color)) {
        return "Not all nodes can be colored with distinct colors";
      }
    }
  }
  return "Yes, all the nodes can be filled with the colors";
}

console.log(main());
