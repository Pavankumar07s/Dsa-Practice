// Maximum Sum Subarray of size K | Sliding Window

let nums=[1,2,3,4,5,6,7,8,9]
let SubArraySum=[]
let i=0
let j=0
let sum=0
let k=3
while(j<nums.length){
    sum+=nums[j]
    if((j-i+1)<k){
        j++
    }

    else if((j-i+1)==k){
        SubArraySum.push(sum)
        sum-=nums[i]
        i++
        j++
    }
}

console.log(SubArraySum)
// console.log(maxSubArrSum)