// JavaScript implementation of modified BFS 
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
    
    // Helper function for BFS 
    bfshelp(s, visited) { 
        // Create a queue for BFS 
        let q = []; 
        // Mark the current node as visited and enqueue it 
        q.push(s); 
        visited[s] = true; 
    
        while (q.length > 0) { 
        // Dequeue a vertex from queue and print it 
        let f = q.shift(); 
        console.log(f + " "); 
    
        // Check whether the current node is connected to any other node or not 
        if (this.graph.has(f)) { 
            let l = this.graph.get(f); 
            for (let n of l) { 
            // Get all adjacent vertices of the dequeued vertex f. 
            // If an adjacent has not been visited, then mark it visited and enqueue it 
            if (!visited[n]) { 
                visited[n] = true; 
                q.push(n); 
            } 
            } 
        } 
        } 
    } 
    
    // BFS function to check each node 
    bfs(vertex) { 
        let visited = Array(vertex).fill(false); 
        // Marking each node as unvisited 
        for (let i = 0; i < vertex; i++) { 
        // Checking whether the node is visited or not 
        if (!visited[i]) { 
            this.bfshelp(i, visited); 
        } 
        } 
    } 
    } 
    
    // Driver Code-The main function 
    let g = new Graph(); 
    let v = 5; 
    g.addEdge(0, 4); 
    g.addEdge(1, 2); 
    g.addEdge(1, 3); 
    g.addEdge(1, 4); 
    g.addEdge(2, 3); 
    g.addEdge(3, 4); 
    g.bfs(v); 
    
    
    //This code is contributed by shivamsharma215
    