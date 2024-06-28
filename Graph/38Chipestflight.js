// There are n cities and m edges connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from the city fromi to city toi with cost pricei.
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
// Note: The price from city A to B may be different From the price from city B to A.


class Graph {
  constructor() {
    this.graph = new Map();
  }

  addEdge(edge) {
    let [a, b, weight] = edge;
    if (!this.graph.has(a)) {
      this.graph.set(a, []);
    }
    this.graph.get(a).push([b, weight]);
  }

  findCheapestPrice(v, src, dest, k) {
    let distance = Array(v).fill(Infinity);
    distance[src] = 0;
    let queue = [];
    queue.push([0, src, 0]); // [ current stops, current node, current distance]

    while (queue.length) {
      let [stops, node, cost] = queue.shift();
      if (node === dest) {
        return distance[dest];
      }
      if (stops > k) {
        continue;
      }

      for (let [neighbor, price] of this.graph.get(node) || []) {
        if (cost + price < distance[neighbor] || stops + 1 <= k) {
          distance[neighbor] = cost + price;
          queue.push([stops + 1, neighbor, distance[neighbor]]);
        }
      }
    }
  }
}

function main() {
  let g = new Graph();
  let src = 0;
  let dest = 2;
  const MaxStop = 2;
  const v = 5; 

  g.addEdge([0, 1, 5]);
  g.addEdge([0, 3, 2]);
  g.addEdge([3, 1, 2]);
  g.addEdge([1, 4, 1]);
  g.addEdge([1, 2, 5]);
  g.addEdge([4, 2, 1]);

  let ans = g.findCheapestPrice(v, src, dest, MaxStop);
  return ans;
}

console.log(main()); 
