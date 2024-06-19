const Bfs = (visited, startRow, startCol, matrix) => {
    visited[startRow][startCol] = 1;
    let tempList = [[startRow-startRow,startCol-startCol]];
    let queue = [[startRow, startCol]];
    
    const directions = [
        [-1, 0],  // up
        [0, 1],   // right
        [1, 0],   // down
        [0, -1],  // left
    ];

    while (queue.length) {
        const [row, col] = queue.shift();

        for (const [delRow, delCol] of directions) {
            const newRow = row + delRow;
            const newCol = col + delCol;
            if (
                newRow >= 0 && newRow < matrix.length &&
                newCol >= 0 && newCol < matrix[0].length &&
                matrix[newRow][newCol] == 1 &&
                visited[newRow][newCol] == 0
            ) {
                visited[newRow][newCol] = 1;
                tempList.push([newRow-startRow, newCol-startCol]);
                queue.push(([newRow, newCol]));
            }
        }
    }

    return tempList;
}

// Example usage:
const matrix = [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0],
];

const rows = matrix.length;
const cols = matrix[0].length;
let visitedMatrix = Array.from(Array(rows), () => Array(cols).fill(0));
let SetA = new Set();

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (visitedMatrix[i][j] === 0 && matrix[i][j] === 1) {
            let listOfIsland = Bfs(visitedMatrix, i, j, matrix);
            SetA.add(JSON.stringify(listOfIsland)); 
        }
    }
}

console.log(`Total unique isalnd is ${SetA.size}`)

