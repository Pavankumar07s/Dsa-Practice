class Graph { 
    constructor(v) { 
        this.graph = new Map(); // Implementing graph using Map 
        this.visited = Array(v + 1).fill(0);
    } 
    
    // Utility function to add edge in an undirected graph 
    addEdge(a, b) { 
        if (this.graph.has(a)) { 
            let l = this.graph.get(a); 
            l.push(b); 
            this.graph.set(a, l); 
        } else { 
            this.graph.set(a, [b]); 
        }
        
        // Since this is an undirected graph, add edge in both directions
        if (this.graph.has(b)) { 
            let l = this.graph.get(b); 
            l.push(a); 
            this.graph.set(b, l); 
        } else { 
            this.graph.set(b, [a]); 
        }
    }
    
    Dfs(src, parent) {
        this.visited[src] = 1;
        for (let neighbor of this.graph.get(src) || []) { // Handle non-existent neighbors
            if (!this.visited[neighbor]) {
                if (this.Dfs(neighbor, src)) {
                    return true;
                }
            } else if (neighbor != parent) { // Correct condition for cycle detection
                return true;
            }
        }
        return false;
    } 
}

function main() {
    // Driver Code-The main function 
    let v = 7; 
    let g = new Graph(v); 
    let src = 1;
    
    g.addEdge(1, 2); 
    // g.addEdge(1, 3); 
    g.addEdge(2, 5); 
    g.addEdge(3, 4); 
    g.addEdge(3, 6);
    g.addEdge(6, 7);
    g.addEdge(5, 7);
    
    console.log(g.Dfs(src, -1));
}

main();
