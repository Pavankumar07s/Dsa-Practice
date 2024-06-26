// You are given a weighted undirected graph having n vertices numbered from 1 to n and m edges describing there are edges between a to b with some weight, find the shortest path between the vertex 1 and the vertex n,  if there exists a path then return a list whose first element is the weight of the path. If no path exists then return a list containing a single element -1.

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

  dijkstra(src, distance, parent) {
    distance[1] = 0;
    minHeap.push([0, src]);
    while (minHeap.size()) {
      let node = minHeap.pop();
      let [weight, currentNode] = node;
      for (let neighbor of this.graph.get(currentNode) || []) {
        let [v, wt] = neighbor;
        if (weight + wt < distance[v]) {
          parent[v] = currentNode;
          distance[v] = weight + wt;
          minHeap.push([weight + wt, v]);
        }
      }
    }
  }
}

function main() {
  let v = 5;
  let g = new Graph();
  let src = 1;
  let dest = 5;
  g.addEdge([1, 2, 2]);
  g.addEdge([1, 4, 1]);
  g.addEdge([4, 3, 3]);
  g.addEdge([2, 3, 4]);
  g.addEdge([2, 5, 5]);
  g.addEdge([3, 5, 1]);

  let distance = Array(v + 1).fill(Infinity);
  let parent = Array(v + 1).fill(Infinity);
  let path = [];

  g.dijkstra(src, distance, parent);

  if (distance[dest] === Infinity) {
    return [-1];
  }
  // Replace Infinity with -1 for unreachable nodes
  for (let i = 1; i < v; i++) {
    if (distance[i] === Infinity) {
      distance[i] = -1;
    }
  }
  while (parent[dest] != dest) {
    path.push(dest);
    dest = parent[dest];
  }

  return path;
}

console.log(main());
