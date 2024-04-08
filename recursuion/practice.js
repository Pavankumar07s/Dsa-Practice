// let index=0
// let ans=[]
// let arr=['a','a','b']

// function solve(arr,ans,index)
// {
//     if(index>arr.length-1){
//          ans.push(arr.slice().join(''))
//         return
//     }
//     for(i=index;i<arr.length;i++){
//         let temp=arr[index]
//         arr[index]=arr[i]
//         arr[i]=temp
//         solve(arr,ans,index+1)

//         let temp1=arr[index]
//             arr[index]=arr[i]
//             arr[i]=temp1
//     }

//     return ans
// }


// let a=solve(arr,ans,index)
// console.log(a)


function solve(n){

    if(n==0){
        return 0
    }
    if(n==1)return 1

    let a=n+solve(n-1)
    return a

}

for(i=1;i<4;i++){
    console.log(solve(i))
}