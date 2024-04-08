let nums = [-1,1,0,-3,3];
let nums2=[]

for(i=nums.length;i>0;i--){
    let temp=nums.pop()
    let elemMultiply=nums.reduce((val1,val2)=>{
        return val1*val2
    })
    nums.unshift(temp)
    nums2.unshift(elemMultiply)

}
console.log(nums2)

//optimised 1
// /**
//  * @param {number[]} nums
//  * @return {number[]}
// //  */
// // var productExceptSelf = function(nums) {
// //     const n = nums.length;
// //     let prefixProduct = 1;
// //     let suffixProduct = 1;
// //     const result = new Array(n);

// //     for (let i = 0; i < n; i++) {
// //         result[i] = prefixProduct;
// //         prefixProduct *= nums[i];
// //     }

// //     for (let i = n - 1; i >= 0; i--) {
// //         result[i] *= suffixProduct;
// //         suffixProduct *= nums[i];
// //     }

// //     return result;
// // };



let nums = [1, 2, 3, 4,5];

let nums2 = nums.map((_, index) => {
    let tempnums = [...nums];
    tempnums.splice(index, 1);
    return tempnums.reduce((acc, val) => acc * val, 1);
});

console.log(nums2);


let nums = [1, 2, 3, 4,5];

let product = nums.reduce((acc, val) => acc * val, 1);

let nums2 = nums.map((val) => product / val);

console.log(nums2);



// let nums = [-1, 1, 0, -3, 3];
// let nums2 = [];

// let product = 1;

// for (let i = 0; i < nums.length; i++) {
//     nums2.push(product);
//     product *= nums[i];
// }

// console.log(nums2);


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length === 2) return nums.reverse()
    let res = [];
    let value = 1;

    nums.forEach((v) => {
        res.push(value);
        value = value * v;
    })

    value = 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = value * res[i];
        value = value * nums[i];
    }
    return res;
};



