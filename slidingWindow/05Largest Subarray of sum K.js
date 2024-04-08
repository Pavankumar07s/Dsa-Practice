let k = 5;
let arr = [4, 1, 1, 1, 1,1, 3, 5];

let largestSubArr = (arr, k) => {
    let i = 0;
    let j = 0;
    let sum = 0;
    let size = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (sum < k) {
            j++;
        } 
        else if (sum == k) {
            let tempSize = j - i + 1;
            size = Math.max(size, tempSize);
            j++;
        } 
        else if (sum > k) {
            while (sum > k) {
                sum -= arr[i];
                i++;
            }
            if (sum == k) {
                let tempSize = j - i + 1;
                size = Math.max(size, tempSize);
            }
            j++;
        }
    }
    return size;
};

console.log(largestSubArr(arr, k));
