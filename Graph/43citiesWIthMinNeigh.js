// There are n cities labeled from 0 to n-1 with m edges connecting them. Given the array edges where edges[i] = [fromi , toi ,weighti]  represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold. You need to find out a city with the smallest number of cities that are reachable through some path and whose distance is at most Threshold Distance. If there are multiple such cities, our answer will be the city with the greatest label.

// Note: The distance of a path connecting cities i and j is equal to the sum of the edge's weights along that path.

const FloydWarshall = (dist) => {
  const n = dist.length;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          // dist from i to j via k is lesser than the current distance
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
const cityWithMin = (ans, Threshold) => {
  let cntCity = ans.length;
  let cityNo = -1;
  for (let i = 0; i < ans.length; i++) {
    let count = 0;
    for (let j = 0; j < ans[0].length; j++) {
      if (ans[i][j] <= Threshold && i != j) {
        count++;
      }
    }

    if (count <= cntCity) {
      cntCity = count;
      cityNo = i;
    }
  }

  return cityNo;
};

let Threshold = 4;
const ans = FloydWarshall([
  [0, 3, Infinity, Infinity],
  [3, 0, 1, 4],
  [Infinity, 1, 0, 1],
  [Infinity, 4, 1, 0],
]);

console.log(cityWithMin(ans, Threshold));
