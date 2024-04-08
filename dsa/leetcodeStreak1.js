let nums = [1, 2, 3, 4, 5, 2, 7];
let result = [];
for (i = 0; i < nums.length; i++) {
  for (j = i + 1; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      result.unshift(nums[i]);
    }
  }
}
function findMissingElement(arr) {
    const n = arr.length + 1;
    const fullSet = new Set(Array.from({ length: n }, (_, index) => index + 1));
    const arraySet = new Set(arr);

    for (let num of fullSet) {
        if (!arraySet.has(num)) {
            return num;
        }
    }
}

result.push(findMissingElement(nums))

console.log(result);


//optimize 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const n = nums.length;
  const set = new Set();
  
  let duplicate, actualSum = 0;
  for (let num of nums) {
      actualSum += num;
      if (set.has(num)) {
          duplicate = num;
      }
      set.add(num);
  }
  
  const expectedSum = (n * (n + 1)) / 2;
  const missing = duplicate + (expectedSum - actualSum);
  
  return [duplicate, missing];
};


//best code

// @param {number[]} nums
//  * @return {number[]}
//  */
// var findErrorNums = function(nums) {
//     let arr = new Array(nums.length).fill(0);
//     let res = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (arr[nums[i] - 1] === 0) {
//             arr[nums[i] - 1] = nums[i];
//         } else {
//             res.push(nums[i]);
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             res.push(i + 1);
//             break;
//         }
//     }

//     return res;
// };
// /*