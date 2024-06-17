
const Bfs=()=>{
   
}


const main=()=>{
    const matrixContaingTomato= [
        [0, 1, 1, 1,2],
        [1, 1, 1, 1,2],
        [0, 0, 0, 1,0],
        [2, 2, 1, 1,0]
    ];
    const row = matrixContaingTomato.length;
    const col = matrixContaingTomato[0].length
    const visitedMatrix = Array.from(Array(row), () => Array(col).fill(0));
    Bfs(row,col,visitedMatrix,matrixContaingTomato)
    return matrixContaingTomato;
}
const ans=main()
console.log(ans)
