// There are a total of n tasks you have to pick, labelled from 0 to n-1. Some tasks may have prerequisite tasks, for example to pick task 0 you have to first finish tasks 1, which is expressed as a pair: [0, 1]
// Given the total number of n tasks and a list of prerequisite pairs of size m. Find a ordering of tasks you should pick to finish all tasks.
// Note: There may be multiple correct orders, you just need to return any one of them. If it is impossible to finish all tasks, return an empty array. Driver code will print "No Ordering Possible", on returning an empty array. Returning any correct order will give the output as 1, whereas any invalid order will give the output 0. 


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
    let v = 4;
    let g = new Graph(v);
    let prerequisites = [[1,0],[2,1],[3,2]]
    for(i=0;i<prerequisites.length;i++){
        let [a,b]=prerequisites[i]
        g.addEdge(a,b);
    }
    
    g.Bfs(v);
 
   if(v===g.topologicalOrder.length){
    console.log(g.topologicalOrder)
   }else{
    console.log("nop,the work can't be done")
   }
        
    
  }
  main();
  

