// Given a weighted, undirected and connected graph of V vertices and an adjacency list adj where adj[i] is a list of lists containing two integers where the first integer of each list j denotes there is edge between i and j , second integers corresponds to the weight of that  edge . You are given the source vertex S and You to Find the shortest distance of all the vertex's from the source vertex S. You have to return a list of integers denoting shortest distance between each node and Source vertex S.

const { Heap } = require('heap-js');

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

  dijkstra(distance) {
    distance[0] = 0;
    minHeap.push([0, 0]);
    while (minHeap.size()) {
      let node = minHeap.pop();
      let [weight, currentNode] = node;
      for (let neighbor of this.graph.get(currentNode) || []) {
        let [v, wt] = neighbor;
        if (weight + wt < distance[v]) {
          distance[v] = weight + wt;
          minHeap.push([weight + wt, v]);
        }
      }
    }
  }
}

function main() {
  let v = 6;
  let g = new Graph();
  g.addEdge([0, 1, 4]);
  g.addEdge([0, 2, 4]);
  g.addEdge([1, 2, 2]);
  g.addEdge([2, 3, 3]);
  g.addEdge([2, 5, 6]);
  g.addEdge([2, 4, 1]);
  g.addEdge([4, 5, 3]);
  g.addEdge([5, 3, 2]);

  let distance = Array(v).fill(Infinity);
  g.dijkstra(distance);

  // Replace Infinity with -1 for unreachable nodes
  for (let i = 0; i < v; i++) {
    if (distance[i] === Infinity) {
      distance[i] = -1;
    }
  }

  return distance;
}

console.log(main());
