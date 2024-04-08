let arr=[1,5,8,5,9,6,4,8,5,2,3]
let si=0
let ei=arr.length-1

let linearSearch =((arr,si,ei,n)=>{
    //base case
    if(si>=ei){
        return false
    }

    if(arr[si]===n){
         return true
    }
    else{
        return linearSearch(arr,si+1,ei,n)
    }

})

console.log(linearSearch(arr,si,ei,5))