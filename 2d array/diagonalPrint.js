function printMatrixDiagonals(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Print diagonals starting from the top-right corner
    for (let d = 0; d < numRows + numCols - 1; d++) {
        let diagonal = [];
        for (let i = Math.max(0, d - numCols + 1); i <= Math.min(d, numRows - 1); i++) {
            let j = numCols - 1 - (d - i);
            diagonal.push(matrix[i][j]);
        }
        console.log("Diagonal", d + 1, ":", diagonal.join(', '));
    }
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrixDiagonals(matrix);

