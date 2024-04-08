function rotateMatrix(matrix) {
    // Transpose the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            // Swap matrix[i][j] with matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Flip horizontally (clockwise rotation)
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Example input matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Rotate the matrix
const rotatedMatrix = rotateMatrix(matrix);
console.log("Rotated Matrix:");
console.log(rotatedMatrix);
