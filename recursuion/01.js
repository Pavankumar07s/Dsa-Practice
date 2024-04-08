function factorial(n){
    if(n==0)return 1

    return n*factorial(n-1)
}


console.log(factorial(6))


function power(n){
    if(n==0)return 1
    return 2*power(n-1)
}


console.log(power(10))