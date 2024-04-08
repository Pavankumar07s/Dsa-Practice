//linear search
let arr=[0,3,6,6,16,6,6,8,5,8,6,8,42]
let item=6
let index=undefined
// for(i=0;i<arr.length;i++){
//     if(arr[i]===item){
//         console.log("Elemet found at index:",i)
//     }
// }

// finding firsts index od element
for(i=0;i<arr.length;i++){
    if(arr[i]===item){
        index=i;
        console.log("Elemet found at index:",i)
        break;
    }
    
}

console.log(index)

//inbuit function

console.log(arr.indexOf(item))
