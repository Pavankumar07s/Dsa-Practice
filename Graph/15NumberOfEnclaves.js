// You are given an n x m binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
// Find the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

function iterateBoundary(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const boundaryElements = [];

    // Top row
    for (let col = 0; col < cols; col++) {
        if (matrix[0][col] == 1) {
            boundaryElements.push([0, col]);
        }
    }

    // Right column (excluding the first and last elements already printed)
    for (let row = 1; row < rows - 1; row++) {
        if (matrix[row][cols - 1] == 1) {
            boundaryElements.push([row, cols - 1]);
        }
    }

    // Bottom row (in reverse order)
    if (rows > 1) {
        for (let col = cols - 1; col >= 0; col--) {
            if (matrix[rows - 1][col] == 1) {
                boundaryElements.push([rows - 1, col]);
            }
        }
    }

    // Left column (excluding the first and last elements already printed)
    if (cols > 1) {
        for (let row = rows - 2; row > 0; row--) {
            if (matrix[row][0] == 1) {
                boundaryElements.push([row, 0]);
            }
        }
    }
    return boundaryElements;
}

const Dfs = (visited, row, col, matrix, PositionOfLand) => {
    visited[row][col] = 1;
    PositionOfLand.push([row, col]);

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    for (const [delRow, delCol] of directions) {
        const newRow = row + delRow;
        const newCol = col + delCol;
        if (
            newRow >= 0 && newRow < matrix.length &&
            newCol >= 0 && newCol < matrix[0].length &&
            matrix[newRow][newCol] == 1 &&
            visited[newRow][newCol] == 0
        ) {
            Dfs(visited, newRow, newCol, matrix, PositionOfLand);
        }
    }
}

// Example usage:
const matrix = [
    [0,0,0,1,1],
    [0,0,1,1,0],
    [0,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,1,1],
];

const boundaryElements = iterateBoundary(matrix);

const rows = matrix.length;
const cols = matrix[0].length;
let PositionOfLand= [];
const visitedMatrix = Array.from(Array(rows), () => Array(cols).fill(0));

for (let position of boundaryElements) {
    let [row, col] = position;
    if (visitedMatrix[row][col] === 0) {
        Dfs(visitedMatrix, row, col, matrix, PositionOfLand);
    }
}
console.log(PositionOfLand);

var newArray = matrix.map(function(arr) {
    return arr.slice();
});

function fillMatrix(fillMatrix, PositionOfLand, fillValue) {
    for (let position of PositionOfLand) {
        let [row, col] = position;
        fillMatrix[row][col] = fillValue;
    }
}

fillMatrix(newArray,PositionOfLand,0)


console.log(newArray)
let countofLandLeft=0
for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        if(newArray[i][j]==1){
            countofLandLeft++;
        }
    }
}
console.log(`Number of island through which you cant escape is ${countofLandLeft}`)