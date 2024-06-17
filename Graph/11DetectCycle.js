class Graph { 
    constructor() { 
        this.graph = new Map(); // Implementing graph using Map 
    } 
    
    // utility function to add edge in an undirected graph 
    addEdge(a, b) { 
        if (this.graph.has(a)) { 
            let l = this.graph.get(a); 
            l.push(b); 
            this.graph.set(a, l); 
        } else { 
            this.graph.set(a, [b]); 
        } 
    
    } 
    
    detectCycle(src, visited) {
        console.log(this.graph)
        let queue = [];
        visited[src] = true;
        queue.push([src, -1]);
        
        while (queue.length) {
            let [currentNode, parent] = queue.shift();
            console.log(currentNode,parent)
            
            for (let neighbour of this.graph.get(currentNode)) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push([neighbour, currentNode]);
                } else if (parent != neighbour) {
                    return true;
                }
            }
            
        }
        
        return false;
    }
}   

function main(){
// Driver Code-The main function 
let g = new Graph(); 
let v = 7; 
let visited = Array(v).fill(false);

g.addEdge(1, 2); 
g.addEdge(1, 3); 
g.addEdge(2, 5); 
g.addEdge(2, 1); 
g.addEdge(3, 4); 
g.addEdge(3, 1);
g.addEdge(3, 6);
g.addEdge(4, 3);
g.addEdge(6, 3);
g.addEdge(6, 7);
g.addEdge(5, 2);
g.addEdge(5, 7);
g.addEdge(7, 5);
g.addEdge(7, 6);

// g.addEdge(1, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 1);
// g.addEdge(2, 4);
// g.addEdge(3, 1);
// g.addEdge(3, 5);
// g.addEdge(4, 2);
// g.addEdge(5, 3);

for(let i=1;i<=v ;i++){
    if(!visited[i]){
        if(g.detectCycle(i,visited)){
            return true
        }
    }else {
        return false
    }
}
}

console.log(main())

