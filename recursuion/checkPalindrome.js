let arr=['a','b','a','b','a']
let si=0
let ei=arr.length-1
function checkPalindrome(arr,si,ei){
    if(si>ei) return true

    if(arr[si]!=arr[ei]){
        return -1
    }
    else{
     return checkPalindrome(arr,si+1,ei-1)
     
    }
}

console.log(checkPalindrome(arr,si,ei))



