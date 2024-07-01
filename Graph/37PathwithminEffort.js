// You are a hiker preparing for an upcoming hike. You are given heights[][], a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find the route with minimum effort.

// Note: A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

const dizfs = (startingPoition, finalPositon, matrixContaingEffrot) => {
  const row = matrixContaingEffrot.length;
  const col = matrixContaingEffrot[0].length;
  const [startingRow, startingCol] = startingPoition;
  const [finalRow, finalCol] = finalPositon;
  const effortMatrix = Array.from(Array(row), () => Array(col).fill(Infinity));

  let queue = [];
  effortMatrix[startingRow][startingCol] = 0;

  queue.push([0, startingRow, startingCol]);

  while (queue.length) {
    let [nodeEffort, currentrow, currentcol] = queue.shift();
    for (let delRow = -1; delRow <= 1; delRow++) {
      for (let delCol = -1; delCol <= 1; delCol++) {
        // Only move horizontally or vertically, not diagonally
        if (Math.abs(delRow) + Math.abs(delCol) === 1) {
          let newRow = delRow + currentrow;
          let newCol = delCol + currentcol;
          if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < col) {
            if (
              Math.abs(
                matrixContaingEffrot[newRow][newCol] -
                  matrixContaingEffrot[currentrow][currentcol]
              ) < effortMatrix[newRow][newRow]
            ) {
              if (effortMatrix[newRow][newCol] != Infinity) {
                effortMatrix[newRow][newCol] = Math.max(
                  Math.abs(
                    matrixContaingEffrot[newRow][newCol] -
                      matrixContaingEffrot[currentrow][currentcol]
                  ),
                  effortMatrix[newRow][newCol]
                );

                queue.push([effortMatrix[newRow][newCol], newRow, newCol]);
              }
              effortMatrix[newRow][newCol] = Math.max(
                Math.abs(
                  matrixContaingEffrot[newRow][newCol] -
                    matrixContaingEffrot[currentrow][currentcol]
                ),
                nodeEffort
              );

              queue.push([effortMatrix[newRow][newCol], newRow, newCol]);
            }
          }
        }
      }
    }
  }
  return effortMatrix;
};

const main = () => {
  const matrixContaingEffrot = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ];
  const row = matrixContaingEffrot.length;
  const col = matrixContaingEffrot[0].length;
  const startingPoition = [0, 0];
  const finalPositon = [row - 1, col - 1];

  console.log(dizfs(startingPoition, finalPositon, matrixContaingEffrot));
};
main();

////////////this code should be corrected
