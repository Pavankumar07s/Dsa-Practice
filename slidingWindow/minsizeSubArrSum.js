/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let j = 0;
    let i = 0;
    let sum = 0;
    let size = Infinity;
    const sum1 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (sum1 < target) return 0;
        while (j < nums.length) {
            sum += nums[j];
            while (sum >= target) {
            size = Math.min(size, j - i + 1);
            sum -= nums[i];
            i++;
       }
       j++;
   }
   return size === Infinity ? 0 : size;
};