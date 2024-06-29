// You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

// You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.

// Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

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

  dijkstra(src, dest, distance, ways) {
    ways[src] = 1;
    distance[src] = 0;
    minHeap.push([0, src]);
    while (minHeap.size()) {
      let node = minHeap.pop();
      let [weight, currentNode] = node;
      for (let [v, wt] of this.graph.get(currentNode) || []) {
        if (weight + wt == distance[v] && distance[v] != Infinity) {
          ways[v] = ways[currentNode] + ways[v];
          continue;
        } else if (weight + wt < distance[v]) {
          ways[v] = ways[currentNode];
          distance[v] = weight + wt;
          minHeap.push([weight + wt, v]);
        }
      }
    }
  }
}

function main() {
  let v = 9;
  let g = new Graph();
  let src = 0;
  let dest = 8;
  g.addEdge([0, 1, 1]);
  g.addEdge([0, 2, 2]);
  g.addEdge([0, 3, 1]);
  g.addEdge([0, 4, 2]);
  g.addEdge([1, 5, 2]);
  g.addEdge([2, 5, 1]);
  g.addEdge([3, 5, 2]);
  g.addEdge([3, 7, 3]);
  g.addEdge([3, 6, 2]);
  g.addEdge([4, 6, 1]);
  g.addEdge([6, 8, 1]);
  g.addEdge([7, 8, 1]);
  g.addEdge([5, 8, 1]);

  let distance = Array(v).fill(Infinity);
  let ways = Array(v).fill(0);

  g.dijkstra(src, dest, distance, ways);
  return `Total number of ways to reach the destination:-> ${ways[dest]}`;
}

console.log(main());
