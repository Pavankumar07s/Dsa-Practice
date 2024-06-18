function iterateBoundary(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const boundaryElements = [];

    // Top row
    for (let col = 0; col < cols; col++) {
        if (matrix[0][col] == 0) {
            boundaryElements.push([0, col]);
        }
    }

    // Right column (excluding the first and last elements already printed)
    for (let row = 1; row < rows - 1; row++) {
        if (matrix[row][cols - 1] == 0) {
            boundaryElements.push([row, cols - 1]);
        }
    }

    // Bottom row (in reverse order)
    if (rows > 1) {
        for (let col = cols - 1; col >= 0; col--) {
            if (matrix[rows - 1][col] == 0) {
                boundaryElements.push([rows - 1, col]);
            }
        }
    }

    // Left column (excluding the first and last elements already printed)
    if (cols > 1) {
        for (let row = rows - 2; row > 0; row--) {
            if (matrix[row][0] == 0) {
                boundaryElements.push([row, 0]);
            }
        }
    }
    return boundaryElements;
}

const Dfs = (visited, row, col, matrix, PositionOfZero) => {
    visited[row][col] = 1;
    PositionOfZero.push([row, col]);

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
            matrix[newRow][newCol] == 0 &&
            visited[newRow][newCol] == 0
        ) {
            Dfs(visited, newRow, newCol, matrix, PositionOfZero);
        }
    }
}

// Example usage:
const matrix = [
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1],
];

const boundaryElements = iterateBoundary(matrix);
console.log(boundaryElements);

const rows = matrix.length;
const cols = matrix[0].length;
let PositionOfZero = [];
const visitedMatrix = Array.from(Array(rows), () => Array(cols).fill(0));

for (let position of boundaryElements) {
    let [row, col] = position;
    if (visitedMatrix[row][col] == 0) {
        Dfs(visitedMatrix, row, col, matrix, PositionOfZero);
    }
}
console.log(PositionOfZero);
////just leave these position and mark all of rest =1
const finalMatrix = Array.from(Array(rows), () => Array(cols).fill(1));

function fillMatrix(fillMatrix, PositionOfZero, fillValue) {
    for (let position of PositionOfZero) {
        let [row, col] = position;
        fillMatrix[row][col] = fillValue;
    }
}

fillMatrix(finalMatrix,PositionOfZero,0)
console.log(finalMatrix)