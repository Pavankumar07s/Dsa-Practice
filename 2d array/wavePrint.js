// Initialize an empty 2D array with 3 rows and 3 columns
var my2DArray = new Array(3); //rows
for (var i = 0; i < 3; i++) {
  my2DArray[i] = new Array(3); //columns
}

// // Now, you can assign values to each element
my2DArray[0][0] = "One";
my2DArray[0][1] = "Two";
my2DArray[0][2] = "Three";
my2DArray[1][0] = "Four";
my2DArray[1][1] = "Five";
my2DArray[1][2] = "Six";
my2DArray[2][0] = "Seven";
my2DArray[2][1] = "Eight";
my2DArray[2][2] = "Nine";


function wavePrint(my2DArray,rows,cols){

    for(let col=0;col<cols;col++){
        if(col&1){
            //odd index niche se upper
            for(let row=rows-1;row>=0;row--){
               console.log(my2DArray[row][col]," ")
               
            }
        }

        else{
            //even index uper se niche
            for(let row=0;row<rows;row++){
                console.log(my2DArray[row][col]," ")
            }
        }
    }
}

wavePrint(my2DArray,3,3)