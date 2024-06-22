// There are a total of N tasks, labeled from 0 to N-1. Some tasks may have prerequisites, for example to do task 0 you have to first complete task 1, which is expressed as a pair: [0, 1]
// Given the total number of tasks N and a list of prerequisite pairs P, find if it is possible to finish all tasks.

class Graph {
    constructor() {
      this.graph = new Map(); // Implementing graph using Map
      this.topologicalOrder = [];
    }
  
    // Utility function to add edge in an directed graph
    addEdge(a, b) {
      if (this.graph.has(a)) {
        let l = this.graph.get(a);
        l.push(b);
        this.graph.set(a, l);
      } else {
        this.graph.set(a, [b]);
      }
    }
  
    Bfs(v) {
      let inDegree = Array(v).fill(0);
  
      // Compute in-degree of each node
      for (let [currentNode, neighbors] of this.graph.entries()) {
        for (let neighbor of neighbors) {
          inDegree[neighbor]++;
        }
      }
      let queue = [];
      for (let i = 0; i < v; i++) {
        if (inDegree[i] === 0) {
          queue.push(i);
        }
      }
  
      while (queue.length) {
        let currentNode = queue.shift();
        this.topologicalOrder.push(currentNode);
  
        if (this.graph.has(currentNode)) {
          for (let neighbor of this.graph.get(currentNode)) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  function main() {
    // Driver Code-The main function
    let v = 2;
    let g = new Graph(v);
    // let prerequisites = [[1,0],[2,1],[3,2]]
    let prerequisites = [[1,0],[0,1]]
    for(i=0;i<prerequisites.length;i++){
        let [a,b]=prerequisites[i]
        g.addEdge(a,b);
    }
    
    g.Bfs(v);
 
   if(v===g.topologicalOrder.length){
    console.log("Yes you can do the work")
   }else{
    console.log("nop,the work can't be done")
   }
        
    
  }
  main();
  

