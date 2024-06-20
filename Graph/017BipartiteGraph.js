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

        // Since this is an undirected graph, add edge in both directions
        if (this.graph.has(b)) {
            let l = this.graph.get(b);
            l.push(a);
            this.graph.set(b, l);
        } else {
            this.graph.set(b, [a]);
        }
    }

    detectCycle(src, color) {
        let queue = [];
        color[src] = 0;
        queue.push(src);
        while (queue.length) {
            let currentNode = queue.shift();

            for (let neighbour of this.graph.get(currentNode) || []) {
                if (color[neighbour] == -1) {
                    color[neighbour] = 1 - color[currentNode];
                    queue.push(neighbour);
                } else if (color[neighbour] == color[currentNode]) {
                    return false;
                }
            }
        }

        return true;
    }
}

function main() {
    // Driver Code-The main function
    let g = new Graph();
    let v = 8;
    let color = Array(v + 1).fill(-1);

    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(2, 6);
    g.addEdge(3, 4);
    g.addEdge(6, 5);
    g.addEdge(5, 4);
    g.addEdge(4, 7);
    g.addEdge(7, 8);

    for (let i = 1; i <= v; i++) {
        if (color[i] == -1) {
            if (!g.detectCycle(i, color)) {
                return "Not all nodes can be colored with distinct colors";
            }
        }
    }
    return "Yes, all the nodes can be filled with the colors";
}

console.log(main());
