const s = "abcabcbb";

const strToMap = (j, map) => {
    if (map.has(j)) {
        map.set(j, map.get(j) + 1);
    } else {
        map.set(j, 1);
    }
};

const stringTomapRed = (i, map) => {
    if (map.has(i)) {
        map.set(i, map.get(i) - 1);
        if (map.get(i) === 0) {
            map.delete(i);
        }
    }
};

const LongestSubStr = (s) => {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    let map = new Map();

    while (j < s.length) {
        const currentChar = s[j];
        if (map.has(currentChar)) {
            // If the character is already in the map, move the left pointer
            // to the position right after the last occurrence of the character.
            i = Math.max(i, map.get(currentChar) + 1);
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, j - i + 1);

        // Update the position of the current character in the map
        map.set(currentChar, j);

        // Move right pointer to the next character
        j++;
    }

    return maxLength;
};

console.log(LongestSubStr(s));
