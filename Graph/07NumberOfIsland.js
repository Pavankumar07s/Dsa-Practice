const bfs = (i, j, visitedMatrix, matrixContaingWater$Island) => {
    visitedMatrix[i][j] = 1;
    let queue = [];
    queue.push([i, j]);
    const n = matrixContaingWater$Island.length;
    const m = matrixContaingWater$Island[0].length;

    while (queue.length) {
        let [row,col]=queue.shift();
        for (let delRow = -1; delRow <= 1; delRow++) {
            for (let delCol = -1; delCol <= 1; delCol++) {
                // Only move horizontally or vertically, not diagonally
                if (Math.abs(delRow) + Math.abs(delCol) === 1) {
                    let newRow = delRow + row;
                    let newCol = delCol + col;
                    if (
                        newRow >= 0 && newRow < n &&
                        newCol >= 0 && newCol < m &&
                        visitedMatrix[newRow][newCol] === 0 &&
                        matrixContaingWater$Island[newRow][newCol] === 1
                    ) {
                        visitedMatrix[newRow][newCol] = 1;
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }
    }
}

const matrixContaingWater$Island = [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 1]
];

const row = matrixContaingWater$Island.length;
const col = matrixContaingWater$Island[0].length;
const visitedMatrix = Array.from(Array(row), () => Array(col).fill(0));
let count = 0;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (visitedMatrix[i][j] === 0 && matrixContaingWater$Island[i][j] === 1) {
            count++;
            bfs(i, j, visitedMatrix, matrixContaingWater$Island);
        }
    }
}

console.log(count);
