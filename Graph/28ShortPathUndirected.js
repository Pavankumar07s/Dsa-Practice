// You are given an Undirected Graph having unit weight of the edges, find the shortest path from src to all the vertex and if it is unreachable to reach any vertex, then return -1 for that vertex.
class Graph {
  constructor() {
    this.graph = new Map();
    this.queue = [];
  }

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

  Bfs(src, dist) {
    this.queue.push([src, 0]);
    dist[src] = 0;

    while (this.queue.length) {
      let [node, nodeCurrentDist] = this.queue.shift();
      if (this.graph.has(node)) {
        for (let neighbor of this.graph.get(node)) {
          if (nodeCurrentDist + 1 < dist[neighbor]) {
            dist[neighbor] = nodeCurrentDist + 1;
            this.queue.push([neighbor, nodeCurrentDist + 1]);
          }
        }
      }
    }
  }
}

function main() {
  let v = 9;
  let g = new Graph();
  g.addEdge(0, 1);
  g.addEdge(0, 3);
  g.addEdge(1, 0);
  g.addEdge(1, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 1);
  g.addEdge(2, 6);
  g.addEdge(3, 0);
  g.addEdge(3, 4);
  g.addEdge(4, 3);
  g.addEdge(4, 5);
  g.addEdge(5, 4);
  g.addEdge(5, 6);
  g.addEdge(6, 2);
  g.addEdge(6, 5);
  g.addEdge(6, 7);
  g.addEdge(6, 8);
  g.addEdge(7, 6);
  g.addEdge(7, 8);
  g.addEdge(8, 6);
  g.addEdge(8, 7);

  let distance = Array(v).fill(Infinity);
  distance[0] = 0;

  g.Bfs(0, distance);

  // Replace Infinity with -1 for unreachable nodes
  for (let i = 0; i < v; i++) {
    if (distance[i] === Infinity) {
      distance[i] = -1;
    }
  }

  return distance;
}

console.log(main());
