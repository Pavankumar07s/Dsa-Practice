const FloydWarshall = (dist) => {
    const n = dist.length
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (dist[i][j] > dist[i][k] + dist[k][j]) {
            // dist from i to j via k is lesser than the current distance
            dist[i][j] = dist[i][k] + dist[k][j]
          }
        }
      }
    }
    return dist
  }
  
 const ans= FloydWarshall(
      [[0, 1, 2, Infinity],
        [1, 0, Infinity, Infinity],
        [2, Infinity, 0, 1],
        [Infinity, Infinity, 1, 0]
      ]
    )

console.log(ans)