const Bfs = (row, col, visitedMatrix, matrixContaing1$0) => {
  const AnswerMatrix = Array.from(Array(row), () => Array(col).fill(0));
  let queue = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrixContaing1$0[i][j] === 1) {
        visitedMatrix[i][j] = 1;
        AnswerMatrix[i][j] = 0;
        queue.push([[i, j], 0]);
      }
    }
  }

  while (queue.length !== 0) {
    let [position, distance] = queue.shift();
    let startingRow = position[0];
    let startingCol = position[1];

    for (let delRow = -1; delRow <= 1; delRow++) {
      for (let delCol = -1; delCol <= 1; delCol++) {
        // Only move horizontally or vertically, not diagonally
        if (Math.abs(delRow) + Math.abs(delCol) === 1) {
          let newRow = delRow + startingRow;
          let newCol = delCol + startingCol;
          if (
            newRow >= 0 &&
            newRow < row &&
            newCol >= 0 &&
            newCol < col &&
            matrixContaing1$0[newRow][newCol] === 0 &&
            visitedMatrix[newRow][newCol] !== 1
          ) {
            visitedMatrix[newRow][newCol] = 1;
            AnswerMatrix[newRow][newCol] = distance+1;
            queue.push([[newRow, newCol], distance+1]);
          }
        }
      }
    }
  }
  return AnswerMatrix;
};

const main = () => {
  const matrixContaing1$0 = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ];
  const row = matrixContaing1$0.length;
  const col = matrixContaing1$0[0].length;
  const visitedMatrix = Array.from(Array(row), () => Array(col).fill(0));
  const result = Bfs(row, col, visitedMatrix, matrixContaing1$0);
  console.log(result);
};
main();
