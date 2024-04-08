let nums = [1, -9, 5, -5, 9, 8, 5, 6, -254, -86, 2, 5, -6, 2, 8];
let temp = [];
let finalAns = [];
let k = 3;
let i = 0;
let j = 0;
while (j < nums.length) {
    if (nums[j] < 0) {
        temp.push(nums[j]);
    }
    if (j - i + 1 < k) {
        j++;
    } 
     if (j - i + 1 === k) {
        if (temp.length !== 0) {
            finalAns.push(temp[0]); // Pushing the first negative number in the window
            if (nums[i] === temp[0]) {
                temp.shift(); // Remove the element from temp if it's no longer in the window
            }
        } else {
            finalAns.push(0);
        }
        i++;
        j++;
    }
}
console.log(finalAns);
