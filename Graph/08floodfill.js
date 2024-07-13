const dfs=(startingRow,startingCol,newColor,matrixContaingPixel,initialColor)=>{
    const row=matrixContaingPixel.length
    const col=matrixContaingPixel[0].length
    matrixContaingPixel[startingRow][startingCol]=newColor;

    for (let delRow = -1; delRow <= 1; delRow++) {
        for (let delCol = -1; delCol <= 1; delCol++) {
            // Only move horizontally or vertically, not diagonally
            if (Math.abs(delRow) + Math.abs(delCol) === 1) {
                let newRow = delRow + startingRow;
                let newCol = delCol + startingCol;
                if (
                    newRow >= 0 && newRow < row &&
                    newCol >= 0 && newCol < col &&
                    matrixContaingPixel[newRow][newCol] === initialColor&&
                    matrixContaingPixel[newRow][newCol] !==newColor
                ) {
                    dfs(newRow,newCol,newColor,matrixContaingPixel,initialColor)
                }
            }
        }
    }

}

const main=()=>{
    const matrixContaingPixel= [
        [0, 1, 1, 1,2],
        [1, 1, 1, 1,2],
        [0, 0, 0, 1,0],
        [1, 2, 1, 1,0]
    ];
    
    const row = matrixContaingPixel.length;
    const col = matrixContaingPixel[0].length;
    const [startingRow,startingCol]=[1,2]
    const initialColor=matrixContaingPixel[startingRow][startingCol]
    const newColor=3;

    dfs(startingRow,startingCol,newColor,matrixContaingPixel,initialColor)

    return matrixContaingPixel
}
const ans=main()
console.log(ans)