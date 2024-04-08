function sayDigit(n, arr) {
    // base case
    if (n == 0) {
        return;
    }
    
    let digit = n % 10;
    n = Math.floor(n / 10); 
    
    console.log("tail recursion ,ans aise aa raha hai kyuki last se digit seperate ho rahe hai",arr[digit]);
    sayDigit(n, arr);
    console.log("Ans aise is liye aa rha ahai kyuki stack khali hote samay print ho raha hai",arr[digit]);
}

let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

sayDigit(412, arr);
