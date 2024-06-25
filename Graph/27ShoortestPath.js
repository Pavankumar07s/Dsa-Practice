class Graph {
  constructor(v) {
    this.graph = new Map(); // Using a Map for adjacency list
    this.visited = Array(v).fill(false);
    this.stack = [];
  }

  addEdge(edge) {
    let [a, b, weight] = edge;
    if (!this.graph.has(a)) {
      this.graph.set(a, []);
    }
    this.graph.get(a).push([b, weight]);
  }

  dfs(src) {
    this.visited[src] = true;
    if (this.graph.has(src)) {
      for (let neighbor of this.graph.get(src)) {
        let v = neighbor[0];
        if (!this.visited[v]) {
          this.dfs(v);
        }
      }
    }
    this.stack.unshift(src); 
  }

  dfsForDistance(node, distance) {
    if (this.graph.has(node)) {
      for (let neighbor of this.graph.get(node)) {
        let v = neighbor[0];
        let wt = neighbor[1];

        if (distance[node] + wt < distance[v]) {
          distance[v] = distance[node] + wt;
        }
      }
    }
  }
}

function main() {
  let v = 6;
  let g = new Graph(v);
  g.addEdge([0, 1, 2]);
  g.addEdge([0, 4, 3]);
  g.addEdge([4, 5, 4]);
  g.addEdge([4, 2, 2]);
  g.addEdge([1, 2, 3]);
  g.addEdge([2, 3, 6]);
  g.addEdge([5, 3, 1]);

  for (let i = 0; i < v; i++) {
    if (!g.visited[i]) {
      g.dfs(i);
    }
  }

  let distance = Array(v).fill(Infinity);
  distance[0] = 0;
  console.log(g.stack)
  while (g.stack.length) {
    let node = g.stack.shift();
    g.dfsForDistance(node, distance);
  }

  // Replace Infinity with -1 for unreachable nodes
  for (let i = 0; i < v; i++) {
    if (distance[i] === Infinity) {
      distance[i] = -1;
    }
  }

  return distance;
}

console.log(main());
