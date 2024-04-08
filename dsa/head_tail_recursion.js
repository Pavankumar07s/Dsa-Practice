//head recursion
let test=(x)=>{
    console.log(x)
    if(x>0){
        test(x-1)
    }

}
// tail recursion
let test1=(y)=>{
    if(y>0){
        test1(y-1)
    }
    console.log(y)
}


let dataH=5
let dataT=5
test(dataH)
test1(dataT)