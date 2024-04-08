const s = "pwwkew"
const strToMap=(j,map)=>{
    if(map.has(j)){
        map.set(j,map.get(j)+1)
    }
    else{
        map.set(j,1)
    }

}
const stringTomapRed=(i,map)=>{
    if(map.has(i)){
        map.set(i,map.get(i)-1)
        if(map.get(i)==0){
            map.delete(i)
        }
    }

    
}
const LongestSubStr=(s)=>{
    let i=0
    let j=0
    let lengthSUb=0
    let map =new Map()
    while(j<s.length){
        //calculation for j
        strToMap(s[j],map)

        if(map.get(s[j])==1){
            j++
        }

        else if(map.get(s[j])==2){
            let temp=j-i+1
            lengthSUb=Math.max(temp,lengthSUb)
            j++
        }

        else if(map.get(s[j])>1){
            while(map.get(s[j])<=1){
                stringTomapRed=(i,map)
                i++
            }
            if(map.get(s[j])==1){
                let temp=j-i+1
                lengthSUb=Math.max(temp,lengthSUb)
            }
            j++
        }

    }
    return lengthSUb
}

console.log(LongestSubStr(s))