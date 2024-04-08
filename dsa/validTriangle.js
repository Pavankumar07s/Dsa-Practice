let arr=[2,2,3,4]
let count =0
for(k=arr.length-1;k>1;k--){
    let j=k-1
    let i=0
    while(i<j){
        if(arr[i]+arr[j]>arr[k]){
            count+=j-i
            j--
        }
        else{
            i++
        }
    }
}

console.log(count)