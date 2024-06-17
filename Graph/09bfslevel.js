    // JavaScript program to print all levels
	// with odd and even number of nodes 
	
	// Function for BFS in a tree
	function bfs(node, parent, height, vis, tree)
	{

		// Mark first node as visited
		vis[node] = 1;

		// Declare Queue
		let q = [];

		// Push the first element
		q.push(1);

		// Calculate the level of every node
		height[node] = 1 + height[parent];

		// Check if the queue is empty or not
		while (q.length != 0)
		{

			// Get the top element in the queue
			let top = q[0];

			// Pop the element
			q.shift();

			// Mark as visited
			vis[top] = 1;

			// Iterate for the connected nodes
			for(let i = 0; i < tree[top].length; i++)
			{

				// If not visited
				if (vis[tree[top][i]] == 0)
				{

					// Insert into queue
					q.push(tree[top][i]);

					// Increase level
					height[tree[top][i]] = 1 + height[top];
				}
			}
		}
	}

	// Function to insert edges
	function insertEdges(x, y, tree)
	{
		tree[x].push(y);
		tree[y].push(x);
	}

	// Function to print all levels
	function printLevelsOddEven(N, vis, height)
	{
		let mark = new Array(N + 1);
		mark.fill(0);

		let maxLevel = 0;
		for(let i = 1; i <= N; i++)
		{

			// Count number of nodes
			// in every level
			if (vis[i]!=0)
				mark[height[i]]++;

			// Find the maximum height of tree
			maxLevel = Math.max(height[i], maxLevel);
		}

		// Print odd number of nodes
		document.write("The levels with odd " +
					"number of nodes are: ");

		for(let i = 1; i <= maxLevel; i++)
		{
			if (mark[i] % 2 != 0)
			{
				document.write(i + " ");
			}
		}

		// print even number of nodes
		document.write("</br>" + "The levels with even " +
					"number of nodes are: ");

		for(let i = 1; i <= maxLevel; i++)
		{
			if (mark[i] % 2 == 0)
			{
				document.write(i + " ");
			}
		}
	}
	
	// Construct the tree
	
	/* 1
	/ \
	2	 3
	/ \	 \
	4 5 6
		/ \ /
	7 8 9 */
	
	let N = 9;
	
	let tree = new Array(N + 1);
	
	for(let i = 0; i < N + 1; i++)
	{
		tree[i] = [];
	}
	
	insertEdges(1, 2, tree);
	insertEdges(1, 3, tree);
	insertEdges(2, 4, tree);
	insertEdges(2, 5, tree);
	insertEdges(5, 7, tree);
	insertEdges(5, 8, tree);
	insertEdges(3, 6, tree);
	insertEdges(6, 9, tree);
	
	let height = new Array(N + 1);
	let vis = new Array(N + 1);
	vis.fill(0);
	
	height[0] = 0;
	
	// Call the bfs function
	bfs(1, 0, height, vis, tree);
	
	// Function to print
	printLevelsOddEven(N, vis, height);


