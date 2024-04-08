// // let nums =[-1,0,1,2,-1,-4,-2,-3,3,0,4]

// // // let n = nums.length;

// // // let conquer = (arr, si, mid, ei) => {
// // //     let merged = [];
// // //     let idx1 = si;
// // //     let idx2 = mid + 1;
// // //     while (idx1 <= mid && idx2 <= ei) {
// // //       if (arr[idx1] < arr[idx2]) {
// // //         merged.push(arr[idx1]);
// // //         idx1++;
// // //       } else {
// // //         merged.push(arr[idx2]);
// // //         idx2++;
// // //       }
// // //     }
// // //     while (idx1 <= mid) {
// // //       merged.push(arr[idx1]);
// // //       idx1++;
// // //     }
  
// // //     while (idx2 <= ei) {
// // //       merged.push(arr[idx2]);
// // //       idx2++;
// // //     }
// // //     for (let i = 0, j = si; i < merged.length; i++, j++) {
// // //       arr[j] = merged[i];
// // //     }
// // //   };
  

// // // let divide = (arr, si, ei) => {
// // //   if(si<ei){
// // //     let mid = Math.floor(si + (ei - si) / 2); // Use Math.floor to ensure mid is an integer
// // //     divide(arr, si, mid);
// // //     divide(arr, mid + 1, ei);
// // //     conquer(arr, si, mid, ei);
// // //   }
  
// // // };

// // // divide(nums, 0, n - 1);
// // // let number=[]
// // //     nums.sort()
// // //     for(i=0;i<nums.length;i++){
// // //         if(i>0 && nums[i]==nums[i-1]){
// // //             continue;
// // //         } 
// // //         let j=i+1
// // //         let k=nums.length-1
// // //         while(j<k){
// // //             let sum=nums[i]+nums[j]+nums[k]
// // //             if(sum<0){
// // //                 j++
// // //             }
// // //             else if(sum>0){
// // //                 k--
// // //             }
// // //             else{
// // //                 let temp=[nums[i],nums[j],nums[k]]
// // //                 number.push(temp)
// // //                 j++
// // //                 k--
// // //                 while(j<k && nums[j]==nums[j-1]){
// // //                     j++
// // //                 }
// // //                 while(j<k && nums[k]==nums[k+1]){
// // //                     k--
// // //                 }
// // //             }
// // //         }
// // //     }

// // //     console.log(number)


// // let number = [];

// // nums.sort();

// // for (let i = 0; i < nums.length; i++) {
// //     if (i > 0 && nums[i] === nums[i - 1]) {
// //         continue;
// //     }
// //     let j = i + 1;
// //     let k = nums.length - 1;
// //     while (j < k) {
// //         let sum = nums[i] + nums[j] + nums[k];
// //         if (sum < 0) {
// //             j++;
// //         } else if (sum > 0) {
// //             k--;
// //         } else {
// //             let temp = [nums[i], nums[j], nums[k]];
// //             number.push(temp);
// //             j++;
// //             k--;
// //             while (j < k && nums[j] === nums[j - 1]) {
// //                 j++;
// //             }
// //             while (j < k && nums[k] === nums[k + 1]) {
// //                 k--;
// //             }
// //         }
// //     }
// // }

// // console.log(number);



// function arrayToMap(nums, k) {
//     let map = new Map();
//     let countBox = [];
//     let count = 0;
//     let indexStep = 0;
//     for (let i = 0; i < nums.length; i++) {
        
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1);
//             count++;
//         } 

//         else if (map.has(nums[i]) && map.get(nums[i]) < k) {
//             map.set(nums[i], map.get(nums[i]) + 1);
//             count++;
//         } 

//         else if (map.has(nums[i])) {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         }

//         if(map.get(nums[i])>k ||i==nums.length-1) {
            
//             countBox.push(count);
 
//             i = indexStep;
//             indexStep++;
//             console.log(map)
//             count = 0; 
//             map.clear();
//         }
        
//     }
//     // console.log(countBox)
//     // let array=Array.from(map)
//     // console.log(array)
//     return  Math.max(...countBox);
// }

// var maxSubarrayLength = function(nums, k) {
//     if (nums.length == 1) return 1;
//     // console.log(arrayToMap(nums, k));
//     return arrayToMap(nums, k);
// };
// // let nums =
// // [1,2,3,1,2,3,1,2]
// let nums =
// [2,2,3]
// let k =1
// console.log(maxSubarrayLength(nums,k))



function stringToMapFort(t){
    let map1=new Map();
    for(let elem of t){

        if(map1.has(elem)){

            map1.set(elem,map1.get(elem)+1)

        }

        else{

            map1.set(elem,1)

        }

    }
    return map1;
}
function stringToMapFors(s){
    let map=new Map();
    
    for(let elem of s){
        if(map.has(elem)){
            map.set(elem,map.get(elem)+1)
        }
        else{
            map.set(elem,1)
        }
    }
    
    return map;
    
}
var isIsomorphic = function(s, t) {
    if(s.length!=t.length)return false;
    let sArr=stringToMapFors(s);
    let tArr=stringToMapFort(t);
    console.log(sArr)
    let sRep=[]
    let tRep=[]

    for(let [key,value] of sArr){
       sRep.push(value)
    }
    for(let [key,value] of tArr){
       tRep.push(value)
    }
    
    sRep.sort((a,b)=>a-b)
    tRep.sort((a,b)=>a-b)
    console.log(sRep)
    for(let i=0;i<sRep.length;i++){
        if(sRep[i]!=tRep[i])return false
    }
       
           

return true
    
};

console.log(isIsomorphic("egg", "add"))