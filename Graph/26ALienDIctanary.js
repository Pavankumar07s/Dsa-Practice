// Given a sorted dictionary of an alien language having N words and k starting alphabets of standard dictionary. Find the order of characters in the alien language.
// Note: Many orders may be possible for a particular test case, thus you may return any valid order and output will be 1 if the order of string returned by the function is correct else 0 denoting incorrect string returned.

class Solution {
    findOrder(dict, N, K) {
      class Graph {
        constructor(v) {
          this.vertices = v;
          this.graph = new Map();
          this.inDegree = new Array(v).fill(0);
          this.topologicalOrder = [];
        }
  
        addEdge(a, b) {
          if (!this.graph.has(a)) {
            this.graph.set(a, []);
          }
          this.graph.get(a).push(b);
          this.inDegree[b]++;
        }
  
        Bfs() {
          let queue = [];
          for (let i = 0; i < this.vertices; i++) {
            if (this.inDegree[i] === 0) {
              queue.push(i);
            }
          }
  
          while (queue.length > 0) {
            let currentNode = queue.shift();
            this.topologicalOrder.push(currentNode);
  
            if (this.graph.has(currentNode)) {
              for (let neighbor of this.graph.get(currentNode)) {
                this.inDegree[neighbor]--;
                if (this.inDegree[neighbor] === 0) {
                  queue.push(neighbor);
                }
              }
            }
          }
        }
      }
  
      // Initialize the Graph
      let g = new Graph(K);
  
      // Build the graph based on the given dictionary
      for (let i = 0; i < N - 1; i++) {
        let s1 = dict[i];
        let s2 = dict[i + 1];
        for (let j = 0; j < Math.min(s1.length, s2.length); j++) {
          if (s1[j] !== s2[j]) {
            g.addEdge(s1.charCodeAt(j) - 'a'.charCodeAt(0), s2.charCodeAt(j) - 'a'.charCodeAt(0));
            break; 
          }
        }
      }
  
      // Perform topological sorting using BFS
      g.Bfs();
  
      // Construct the resulting order string
      let ans = "";
      for (let elem of g.topologicalOrder) {
        ans += String.fromCharCode(elem + 'a'.charCodeAt(0));
      }
  
      return ans;
    }
  }