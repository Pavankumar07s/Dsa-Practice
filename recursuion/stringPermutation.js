let arr=['a','b','c']
let index=0
let ans=[]

function solve(arr,index,ans,out){
        //base condition
        if(index>arr.length-1){
            ans.push(arr.slice().join(''))
            return
        }
        //logic
        for(let i=index;i<arr.length;i++){
            let temp=arr[index]
            arr[index]=arr[i]
            arr[i]=temp
            solve(arr,index+1,ans,out)
            //backtrack
            let temp1=arr[index]
            arr[index]=arr[i]
            arr[i]=temp1
        }
        
        return ans
}

let a=solve(arr,index,ans)
console.log(a)



