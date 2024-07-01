const { Heap } = require("heap-js");

// Min Heap by default
const minHeap = new Heap();

class Graph {
  constructor() {
    this.graph = new Map(); // Using a Map for adjacency list
  }

  addEdge(edge) {
    let [a, b, weight] = edge;
    if (!this.graph.has(a)) {
      this.graph.set(a, []);
    }
    this.graph.get(a).push([b, weight]);
    if (!this.graph.has(b)) {
      this.graph.set(b, []);
    }
    this.graph.get(b).push([a, weight]);
  }

  prismAlgo(src, visited, MST) {
    minHeap.push([0, src, -1]); //weight,node,parent
    let sum = 0;
    while (minHeap.size()) {
      let [weight, currentNode, parent] = minHeap.pop();
      if (visited[currentNode]) {
        continue;
      }

      visited[currentNode] = true;
      sum += weight;
      if (parent != -1) {
        MST.push([currentNode, parent]);
      }

      for (let neighbor of this.graph.get(currentNode)) {
        let [v, wt] = neighbor;
        if (!visited[v]) {
          minHeap.push([wt, v, currentNode]);
        }
      }
    }

    return [sum, MST];
  }
}

function main() {
  let v = 5;
  let g = new Graph();
  g.addEdge([0, 1, 2]);
  g.addEdge([0, 2, 1]);
  g.addEdge([1, 2, 1]);
  g.addEdge([2, 3, 2]);
  g.addEdge([2, 4, 2]);
  g.addEdge([3, 4, 1]);
  let src = 0;
  let MST = [];
  let visited = Array(v).fill(false);
  console.log(g.prismAlgo(src, visited, MST));
}

main();
