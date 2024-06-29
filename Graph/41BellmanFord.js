function main() {
  let v = 6;
  let edges = [
    [0, 1, 5],
    [1, 2, -2],
    [1, 5, -3],
    [5, 3, 1],
    [3, 2, 6],
    [2, 4, 3],
    [3, 4, -2],
  ];
  let src=0;
  let distance = Array(v).fill(Infinity);
  distance[src] = 0;
  for (let i = 0; i < v; i++) {
    for (let [n1, n2, weight] of edges) {
      if (distance[n1] + weight < distance[n2]) {
        distance[n2] = distance[n1] + weight;
      }
    }
  }

  return `Minimum distance to reach all the nodes:-> ${distance}`;
}

console.log(main());
