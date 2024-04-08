// count max vovel in window k
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let stringToMap=()=>{
    let s='aeiou'
    let map=new Map();
    for(let elem of s){
        if(map.has(elem)){
            map.set(elem,map.get(elem)+1)
        }
        else{
            map.set(elem,1)
        }
    }
    return map
 }
var maxVowels = function(s, k) {
    let map=stringToMap()
    let i=0
    let j=0
    let maxVovel=0
    let count=0
    while(j<s.length){
        //calculation for j
        if(map.has(s[j])){
            count++
        }

        //increment j
        j++

        if((j-i)==k){
            //result milege
            maxVovel=Math.max(count,maxVovel)
            //removing element i
            if(map.has(s[i])){
                count--
            }
            i++
        }
    }

    return maxVovel;
};

console.log(maxVowels("aeikkjdjfdaj",3))