// Initialize an empty 2D array with 3 rows and 3 columns
var my2DArray = new Array(3); //rows
for (var i = 0; i < 3; i++) {
  my2DArray[i] = new Array(3); //columns
}

// Now, you can assign values to each element
my2DArray[0][0] = "One";
my2DArray[0][1] = "Two";
my2DArray[0][2] = "Three";
my2DArray[1][0] = "Four";
my2DArray[1][1] = "Five";
my2DArray[1][2] = "Six";
my2DArray[2][0] = "Seven";
my2DArray[2][1] = "Eight";
my2DArray[2][2] = "Nine";


let ans=[]
function spiralPrint(){
    let row=3
    let col=3
    let count=0
    let total =9 // Adjusted total to match the size of the array

    //index initialisation
    let startingRow=0 
    let startingCol=0 
    let endingRow=row-1 
    let endingCol=col-1 

    while(count<total){

            //print starting row
            for(let i=startingCol;count<total && i<=endingCol;i++){ 
                ans.push(my2DArray[startingRow][i]) 
                count++
            }
            startingRow++ // Moved outside the loop

            //print ending col
            for(let i=startingRow;count<total && i<=endingRow;i++){ 
                ans.push(my2DArray[i][endingCol]) 
                count++

            }
            endingCol-- // Moved outside the loop

            //printing ending row
            for(let i=endingCol;count<total && i>=startingCol;i--){ 
                ans.push(my2DArray[endingRow][i]) 
                count++

            }
            endingRow-- // Moved outside the loop

            //printing starting col
            for(let i=endingRow;count<total && i>=startingRow;i--){ 
                ans.push(my2DArray[i][startingCol]) 
                count++

            }
            startingCol++ // Moved outside the loop

    }

}
spiralPrint()

console.log(ans)
