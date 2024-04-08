function fabovnachiNumber(n){
    if(n==0)return 0
    if(n==1)return 1
    let ans=fabovnachiNumber(n-1)+fabovnachiNumber(n-2)
    return ans
}

console.log(fabovnachiNumber(10))
console.log("fabonachi series")
for(i=0;i<=10;i++){
    console.log(fabovnachiNumber(i))
}