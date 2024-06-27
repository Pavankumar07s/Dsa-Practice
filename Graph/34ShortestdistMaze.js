// Given a n * m matrix grid where each element can either be 0 or 1. You need to find the shortest distance between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1.

// If the path is not possible between source cell and destination cell, then return -1.

// Note : You can move into an adjacent cell if that adjacent cell is filled with element 1. Two cells are adjacent if they share a side. In other words, you can move in one of the four directions, Up, Down, Left and Right. The source and destination cell are based on the zero based indexing. The destination cell should be 1.

const dizfs = (startingPoition, finalPositon, matrixContaingPixel) => {
  const row = matrixContaingPixel.length;
  const col = matrixContaingPixel[0].length;
  const [startingRow, startingCol] = startingPoition;
  const [finalRow, finalCol] = finalPositon;
  const distanceMatrix = Array.from(Array(row), () =>
    Array(col).fill(Infinity)
  );

  let queue = [];
  distanceMatrix[startingRow][startingCol] = 0;

  queue.push([0, startingRow, startingCol]);

  while (queue.length) {
    let [nodeDistance, currentrow, currentcol] = queue.shift();
    for (let delRow = -1; delRow <= 1; delRow++) {
      for (let delCol = -1; delCol <= 1; delCol++) {
        // Only move horizontally or vertically, not diagonally
        if (Math.abs(delRow) + Math.abs(delCol) === 1) {
          let newRow = delRow + currentrow;
          let newCol = delCol + currentcol;
          if (
            newRow >= 0 &&
            newRow < row &&
            newCol >= 0 &&
            newCol < col &&
            matrixContaingPixel[newRow][newCol] === 1
          ) {
            if (
              nodeDistance + matrixContaingPixel[newRow][newCol] <
              distanceMatrix[newRow][newCol]
            ) {
              distanceMatrix[newRow][newCol] =
                nodeDistance + matrixContaingPixel[newRow][newCol];
              queue.push([distanceMatrix[newRow][newCol], newRow, newCol]);
            }
            if (newRow == finalRow && newCol == finalCol) {
              return [distanceMatrix[newRow][newCol],distanceMatrix];
            }
          }
        }
      }
    }
  }
  
};

const main = () => {
  const matrixContaingPixel = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
  ];

  const startingPoition = [0, 1];
  const finalPositon = [2, 2];

  let ans = dizfs(startingPoition, finalPositon, matrixContaingPixel);
  console.log(ans);
};
main();
