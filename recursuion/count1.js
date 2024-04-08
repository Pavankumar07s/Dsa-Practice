/**
 * @param {number} n
 * @return {number}
 */
function solve(n, output) {
    // Base case
    if (n === 0) {
        return output;
    }
    
    let arr = n.toString().split(""); 
    return solve(n - 1, output.concat(arr)); 
}

var countDigitOne = function(n) {
    if (n === 0) return 0;
    let output = [];
    let count = 0;
    let arr = solve(n, output);
    
    for (let item of arr) {
        for(let digit of item) {
            if (digit === '1') {
                count++;
            }
        }
    }
    return count;
};

console.log(countDigitOne(8192))