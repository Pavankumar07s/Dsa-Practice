class Graph { 
    constructor() { 
        this.graph = new Map(); // Implementing graph using Map 
    } 
    
    addEdge(a, b) { 
        if (this.graph.has(a)) { 
            let l = this.graph.get(a); 
            l.push(b); 
            this.graph.set(a, l); 
        } else { 
            this.graph.set(a, [b]); 
        } 
    } 
    
    dfs(visitedList, startNode, ls) {
        visitedList[startNode] = true;
        // ls.push(startNode);

        for (const it of this.graph.get(startNode) || []) {
            if (!visitedList[it]) {
                this.dfs(visitedList, it, ls);
            }
        }
    }
}

let g = new Graph(); 
let vertex = 9; // Total number of vertices + 1 for 1-based index
g.addEdge(1, 2); 
g.addEdge(2, 1);
g.addEdge(2, 3);
g.addEdge(3, 2);
g.addEdge(4, 5);
g.addEdge(5, 4);
g.addEdge(5, 6);
g.addEdge(6, 5);
g.addEdge(7, 8);
g.addEdge(8, 3);


let visitedList = Array(vertex).fill(false);
const ls = [];
let countProviences=0;
for(let i=1;i<vertex;i++){
    if(!visitedList[i]){
        countProviences++;
        g.dfs(visitedList,i, ls); 
    }
}

console.log(countProviences)

