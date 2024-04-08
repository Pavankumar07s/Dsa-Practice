let s="aabacbebebe"
let k=3
const stringTomap=(j,map)=>{
    if(map.has(j)){
        map.set(j,map.get(j)+1)

    }
    else{
        map.set(j,1)
    }
    return map
}
const stringTomapRed=(i,map)=>{
    if(map.has(i)){
        map.set(i,map.get(i)-1)
        if(map.get(i)==0){
            map.delete(i)
        }
    }

    
}
const longestSubstringWithK=(s,k)=>{
    let i=0
    let j=0
    let largestSub=0
    let map=new Map()
    while(j<s.length){
        //calculation 
        stringTomap(s[j],map)
        if(map.size<k){
            j++
        }

        else if(map.size ==k){
            let temp=j-i+1
            largestSub=Math.max(largestSub,temp)
            j++
        }
        else if(map.size>k){
            while(map.size>k){
                stringTomapRed(s[i],map)
                i++
            }
            if(map.size==k){
                let temp=j-i+1
                largestSub=Math.max(largestSub,temp)
            }
            j++
        }

    }
    return largestSub
}

console.log(longestSubstringWithK("aaaa",1))