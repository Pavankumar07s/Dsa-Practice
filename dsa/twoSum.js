// let nums =[3,2,4]
// let  target = 6
// let twoSum=(nums,target)=>{
//     for(i=0;i<nums.length;i++){
//         for(j=1+i;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j]
//             }
//         }
//     }
//     return []

// }

// console.log(twoSum(nums,target))

// more optimized
let array = [2,7,11,15]
let goal = 9;
const twoSum = (array, goal) => {
  let numberMap = new Map();

  for (let index = 0; index < array.length; index++) {
    el = array[index];

    if (numberMap.has(goal - el)) {
      return [index, numberMap.get(goal - el)];
    } else numberMap.set(el, index);
  }

  return [];
};

console.log(twoSum(array, goal));
