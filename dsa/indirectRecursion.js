//indirect recursion

let money=100
let totalApple=0
let oneAppleAmount=7
//direct recursion
// let buyApple =(x)=>{
//     if(x>0 && x>oneAppleAmount){
//         console.log("you have money left",x,"and total apple is",totalApple)
//         totalApple++
//         buyApple(x-oneAppleAmount)
//     }
//     else{
//         console.log("you dont  have money left",x,"and total apple is",totalApple)
//     }

// }


//indirect recursion

let buyApple =(x)=>{
    if(x>0 && x>oneAppleAmount){
        totalApple++
        console.log("you have money left",x,"and total apple is",totalApple)
        buyMore(x)
    }
    else{
        console.log("you dont  have money left",x,"and total apple is",totalApple)
    }

}

let buyMore=(x)=>{
    buyApple(x-oneAppleAmount)

}

buyApple(money)