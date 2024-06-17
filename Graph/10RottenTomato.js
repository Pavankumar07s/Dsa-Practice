const Bfs = (row, col, visitedMatrix, matrixContaingTomato) => {
    let queue = [];
    let freshTomato = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (matrixContaingTomato[i][j] === 2) {
          visitedMatrix[i][j] = 2;
          queue.push([[i, j], 0]);
        } else if (matrixContaingTomato[i][j] === 1) {
          freshTomato++;
          visitedMatrix[i][j] = 1;
        }
      }
    }
    
    let time = 0;
    let countForRottedTomato = 0;
    
    while (queue.length !== 0) {
      let TomatoData = queue.shift();
      let position = TomatoData[0];
      time = Math.max(time, TomatoData[1]);
      let startingRow = position[0];
      let startingCol = position[1];
  
      console.log(position, time);
  
      for (let delRow = -1; delRow <= 1; delRow++) {
        for (let delCol = -1; delCol <= 1; delCol++) {
          // Only move horizontally or vertically, not diagonally
          if (Math.abs(delRow) + Math.abs(delCol) === 1) {
            let newRow = delRow + startingRow;
            let newCol = delCol + startingCol;
            if (
              newRow >= 0 && newRow < row &&
              newCol >= 0 && newCol < col &&
              matrixContaingTomato[newRow][newCol] === 1 &&
              visitedMatrix[newRow][newCol] !== 2
            ) {
              countForRottedTomato++;
              visitedMatrix[newRow][newCol] = 2; // Mark as visited
              queue.push([[newRow, newCol], time + 1]);
            }
          }
        }
      }
    }
  
    if (freshTomato === countForRottedTomato) {
      return [true, time];
    } else {
      return [false, time];
    }
  };
  
  const main = () => {
    const matrixContaingTomato = [
      [0, 1, 1, 1, 2],
      [1, 1, 1, 1, 2],
      [0, 0, 0, 0, 0],
      [2, 2, 0, 1, 0],
    ];
    const row = matrixContaingTomato.length;
    const col = matrixContaingTomato[0].length;
    const visitedMatrix = Array.from(Array(row), () => Array(col).fill(0));
    const result = Bfs(row, col, visitedMatrix, matrixContaingTomato);
    console.log(result);
    return result;
  };
  
  const ans = main();
  