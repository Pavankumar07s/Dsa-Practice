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
        ls.push(startNode);

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
g.addEdge(1, 3);
g.addEdge(2, 1);
g.addEdge(2, 5);
g.addEdge(2, 6);
g.addEdge(3, 1);
g.addEdge(3, 4);
g.addEdge(3, 7);
g.addEdge(4, 3);
g.addEdge(4, 8);
g.addEdge(5, 2);
g.addEdge(6, 2);
g.addEdge(7, 3);
g.addEdge(7, 8);
g.addEdge(8, 4);
g.addEdge(8, 7);

let visitedList = Array(vertex).fill(false);
let startNode = 1; // Start node should be in the range of the vertices
const ls = [];
g.dfs(visitedList, startNode, ls); 
console.log(ls);
