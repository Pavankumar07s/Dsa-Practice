function matrixMultiplication(matrix1, matrix2) {
    let result = [];

    // Check for valid dimensions
    if (matrix1[0].length !== matrix2.length) {
        console.error("Invalid dimensions for matrix multiplication");
        return result;
    }

    // Initialize result matrix with appropriate dimensions
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0;
        }
    }

    // Perform multiplication
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// Example matrices
const matrixA = [
    [1, 2, 3],
    [4, 5, 6],[7,8,9]
];

const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

// Perform multiplication
const resultMatrix = matrixMultiplication(matrixA, matrixB);
console.log("Result of matrix multiplication:");
console.log(resultMatrix);
