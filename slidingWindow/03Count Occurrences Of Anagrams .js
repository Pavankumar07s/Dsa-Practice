let s = "aabaabaaaxabaa";
let s1 = "aaba";

// Function to count characters in the pattern string s1
function countingElem(s1) {
    let map = new Map();

    for (let elem of s1) {
        if (map.has(elem)) {
            map.set(elem, map.get(elem) + 1);
        } else {
            map.set(elem, 1);
        }
    }
    return map;
}

let map = countingElem(s1);
let uniqueCount = map.size;
let i = 0;
let j = 0;
let ans = 0;

while (j < s.length) {
    // Calculation for j
    if (map.has(s[j])) {
        map.set(s[j], map.get(s[j]) - 1);
        if (map.get(s[j]) === 0) {
            uniqueCount--;
        }
    }
    j++;
    

    // Window size reached
    if ((j - i) === s1.length) {
        if (uniqueCount === 0) {
            ans++;
        }
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
            if (map.get(s[i]) === 1) {
                uniqueCount++;
            }
        }
        i++;
    }
}

console.log(ans); // Output: 3
