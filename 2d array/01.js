const prompt = require("prompt-sync")();
// Initialize an empty 2D array with 3 rows and 3 columns
var my2DArray = new Array(3); //rows
for (var i = 0; i < 3; i++) {
  my2DArray[i] = new Array(4); //columns
}

// // Now, you can assign values to each element
// my2DArray[0][0] = "One";
// my2DArray[0][1] = "Two";
// my2DArray[0][2] = "Three";
// my2DArray[1][0] = "Four";
// my2DArray[1][1] = "Five";
// my2DArray[1][2] = "Six";
// my2DArray[2][0] = "Seven";
// my2DArray[2][1] = "Eight";
// my2DArray[2][2] = "Nine";

// input row wise
for (i = 0; i < 3; i++) {
  for (j = 0; j < 4; j++) {
    my2DArray[i][j] = prompt(`Enter the ${i},${j} :`);
  }
}
// input column wise
// for(col=0;col<4;col++){
//     for(row=0;row<3;row++){
//         my2DArray[row][col]=prompt(`Enter the ${row},${col} :`);
//     }v
// }

for (i = 0; i < 3; i++) {
  for (j = 0; j < 4; j++) {
     process.stdout.write(my2DArray[i][j]);
  }
  console.log("\n");
}

//search element
function searchElement(my2DArray, target) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
      if (my2DArray[i][j] == target) {
        console.log("element found at index", i, j);
      }
    }
  }
  return false;
}

function rowWiseSum(my2DArray){
  let rowSum=[]
  for (i = 0; i < 3; i++) {
    let sum=0
    for (j = 0; j < 4; j++) {
      sum+=parseInt(my2DArray[i][j])
      
    }
    rowSum.push(sum)
  }
  
  return rowSum
  
}

console.log(rowWiseSum(my2DArray))

function largestRowSum(rowsum){
  let max=Number.MIN_VALUE;
  let rowIndex=-1
  for(i=0;i<rowsum.length;i++){
    if(max<rowsum[i]){
        max=rowsum[i]
        rowIndex=i
    }
  }
  return max,rowIndex
}

console.log(largestRowSum(rowWiseSum(my2DArray)))
