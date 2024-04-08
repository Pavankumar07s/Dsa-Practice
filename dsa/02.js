//how to delete any element at any index

let arr =[2,65,8,4,6,5]
let positionDelete=3
console.log(arr)

// meathod 1
for(i=positionDelete;i<arr.length-1;i++){
    let tempNum=arr[i+1]
    arr[i+1]=arr[i]
    arr[i]=tempNum
}

// meathod 2
for(i=positionDelete;i<arr.length-1;i++){
   arr[i]= arr[i+1]
}
console.log("array after taking the deleteing eleem t at the last position",arr)
arr.pop()

console.log("array after deleteing the element",arr)