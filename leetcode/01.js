function BFS(board, click, visited) {
  let queue = [];
  let [x, y] = click;
  visited[x][y] = 1;
  queue.unshift(click);
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];

  while (queue.length) {
    let [row, col] = queue.shift();
    let bombFound = 0;
    
    for (const [delRow, delCol] of directions) {
      const newRow = row + delRow;
      const newCol = col + delCol;

      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[0].length
      ) {
        if (board[newRow][newCol] === "M") {
          bombFound++;
        }
      }
    }

    if (bombFound > 0) {
      board[row][col] = bombFound;
    } else {
      board[row][col] = "B"; 

     
      for (const [delRow, delCol] of directions) {
        const newRow = row + delRow;
        const newCol = col + delCol;

        if (
          newRow >= 0 &&
          newRow < board.length &&
          newCol >= 0 &&
          newCol < board[0].length &&
          board[newRow][newCol] === "E" &&
          visited[newRow][newCol] === 0
        ) {
          visited[newRow][newCol] = 1;
          queue.push([newRow, newCol]);
        }
      }
    }
  }
}

function main() {
  let board = [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"],
  ];
  let click = [3, 0];
  let [x, y] = click;
  let row = board.length;
  let col = board[0].length;
  const visited = Array.from(Array(row), () => Array(col).fill(0));

  if (board[x][y] !== "M") BFS(board, click, visited);
  else {
    board[x][y] = "X";
  }

  return board;
}

console.log(main());
