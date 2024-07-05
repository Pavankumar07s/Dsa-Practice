// // /**
// //  * @param {string} s
// //  * @return {string}
// //  */
// // class Stack { 

// //     // Array is used to implement stack 
// //     constructor() 
// //     { 
// //         this.items = []; 
// //     } 
 
// //     // push function 
// //     push(element) 
// //     { 
// //         // push element into the items 
// //         this.items.push(element); 
// //     } 
// //     // pop function 
// //     pop() 
// //     { 
// //         // return top most element in the stack 
// //         // and removes it from the stack 
// //         // Underflow if stack is empty 
// //         if (this.items.length == 0) 
// //             return "Underflow"; 
// //         return this.items.pop(); 
// //     } 
// //     // peek function 
// //     peek() 
// //     { 
// //         // return the top most element from the stack 
// //         // but does'nt delete it. 
// //         return this.items[this.items.length - 1]; 
// //     } 
// //     // isEmpty function 
// //     isEmpty() 
// //     { 
// //         // return true if stack is empty 
// //         return this.items.length == 0; 
// //     } 
// //     // printStack function 
// //     printStack() 
// //     { 
// //         let str = ""; 
// //         for (let i = 0; i < this.items.length; i++) 
// //             str += this.items[i] + " "; 
// //         return str; 
// //     } 
// //     // size function
// //     size() {
// //         // return the size of the stack
// //         return this.items.length;
// //     }
// //  } 
// // let stackToString=(stack)=>{
// //     let result=""
// //     while(stack.size()>0){
// //         result+=stack.pop()
// //     }

// //     return result.split('').reverse().join("")
// // }
// // var makeGood = function(s) {
// //     let stack = new Stack();
// //     if (s.length > 0) {
// //         stack.push(s[0]);
// //     }
// //     for (let i = 1; i < s.length; i++) {
// //         if (!stack.isEmpty() && s[i]) {
// //             let topChar = stack.peek();
// //             console.log("Top Char:", topChar, "Current Char:", s[i]);
// //             if (Math.abs(topChar.charCodeAt(0) - s[i].charCodeAt(0)) === 32) {
// //                 console.log("Removing:", topChar, s[i]);
// //                 stack.pop();
// //             } 
// //             else{
// //                 console.log("Pushing:", s[i]);
// //             stack.push(s[i]);

// //             }
// //         }
// // //         else {
// // //             console.log("Pushing:", s[i]);
// // //             stack.push(s[i]);
// // //         }
// // //     }
// // //     let output = stackToString(stack);
// // //     return output;
// // // };

// // // console.log(makeGood("hHcOzoC"))

// // /**
// //  * @param {number[]} asteroids
// //  * @return {number[]}
// //  */
// //  /**
// //  * @param {string} s
// //  * @return {boolean}
// //  */
// //  class Stack { 

// //     // Array is used to implement stack 
// //     constructor() 
// //     { 
// //         this.items = []; 
// //     } 
 
// //     // push function 
// //     push(element) 
// //     { 
// //         // push element into the items 
// //         this.items.push(element); 
// //     } 
// //     // pop function 
// //     pop() 
// //     { 
// //         // return top most element in the stack 
// //         // and removes it from the stack 
// //         // Underflow if stack is empty 
// //         if (this.items.length == 0) 
// //             return "Underflow"; 
// //         return this.items.pop(); 
// //     } 
// //     // peek function 
// //     peek() 
// //     { 
// //         // return the top most element from the stack 
// //         // but does'nt delete it. 
// //         return this.items[this.items.length - 1]; 
// //     } 
// //     // isEmpty function 
// //     isEmpty() 
// //     { 
// //         // return true if stack is empty 
// //         return this.items.length == 0; 
// //     } 
// //     // printStack function 
// //     printStack() 
// //     { 
// //         let str = ""; 
// //         for (let i = 0; i < this.items.length; i++) 
// //             str += this.items[i] + " "; 
// //         return str; 
// //     } 
// //     // size function
// //     size() {
// //         // return the size of the stack
// //         return this.items.length;
// //     }
// //  } 

// //  // if(asteroids[0]>0){
// //     //         stack.push(asteroids[0])
// //     //         flag=true
// //     //     }
// //     //     else{
// //     //         stack.push(asteroids[0])
// //     //         flag=false
// //     //     }
// // var asteroidCollision = function(asteroids) {
// //     let stack=new Stack();
// //     let flag=false;
    
// //     for(let i=0;i<asteroids.length;i++){
// //         if (asteroids[i] > 0) {
// //             stack.push(asteroids[i]);
// //             flag = true;
// //         } else {
// //             if (!flag) {
// //                 stack.push(asteroids[i]);
// //             } else {
// //                 // Positive asteroid encountered before
// //                 while (stack.length > 0 && stack.peek()> 0 && Math.abs(stack.peek()) < Math.abs(asteroids[i])) {
// //                     stack.pop();
// //                 }
// //                 if (stack.size() === 0 || stack.peek() < 0) {
// //                     stack.push(asteroids[i]);
// //                 } else if (Math.abs(stack.peek()) === Math.abs(asteroids[i])) {
// //                     stack.pop(); 
// //                 }
// //             }
// //         }
         
// //     }
// //     let i=stack.size()-1
// //     let result=[]
// //     while(stack.size()>0){
// //         result[i]=stack.pop()
// //         i--
// //     }
// //         return result
// // };

// // console.log(asteroidCollision([5,10,-5]))




// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// class Stack { 

//     // Array is used to implement stack 
//     constructor() 
//     { 
//         this.items = []; 
//     } 
 
//     // push function 
//     push(element) 
//     { 
//         // push element into the items 
//         this.items.push(element); 
//     } 
//     // pop function 
//     pop() 
//     { 
//         // return top most element in the stack 
//         // and removes it from the stack 
//         // Underflow if stack is empty 
//         if (this.items.length == 0) 
//             return "Underflow"; 
//         return this.items.pop(); 
//     } 
//     // peek function 
//     peek() 
//     { 
//         // return the top most element from the stack 
//         // but does'nt delete it. 
//         return this.items[this.items.length - 1]; 
//     } 
//     // isEmpty function 
//     isEmpty() 
//     { 
//         // return true if stack is empty 
//         return this.items.length == 0; 
//     } 
//     // printStack function 
//     printStack() 
//     { 
//         let str = ""; 
//         for (let i = 0; i < this.items.length; i++) 
//             str += this.items[i] + " "; 
//         return str; 
//     } 
//     // size function
//     size() {
//         // return the size of the stack
//         return this.items.length;
//     }
//  } 
var checkValidString = function(s) {
    let stack =new Stack();
        let openBraces=0
        let closedBraces=0
        let countStar=0
        for(let i=0;i<s.length;i++){
            if(s[i]=='('){
                stack.push(s[i])
                openBraces++
            }
            else if(s[i]==")"){
                if(s[i]=")" && stack.peek()=="("){
                    stack.pop()
                    openBraces--
                }
                else{
                    stack.push(s[i])
                    closedBraces++
                }
            }
            else{
                countStar++
            }
        }
        console.log(openBraces,closedBraces,countStar)
        let costForValid=Math.floor((openBraces+1)/2)+Math.floor((closedBraces+1)/2)
        console.log(costForValid)
        
        if(costForValid<=countStar){
            return true
        }
        else{
            return false
        }

        for(let elem of s){
            if(elem=="("){
                openBraces++
            }
            else if(elem=="*") countStar++ ;
            else{
                if(openBraces>0) openBraces--;
                else if(countStar>0) countStar-- ;
                else return false ;
            }
        }
        console.log(openBraces,countStar)
        if(openBraces>countStar) return false ;
        countStar =0 ;
        for(let i=s.length-1 ; i>=0 ; i--)
        {   elem = s[i];
            if(elem==")"){
                closedBraces++
            }
            else if(elem=="*") countStar++ ;
            else{
                if(closedBraces>0) closedBraces--;
                else if(countStar>0) countStar-- ;
                else return false ;
            }
        }
        // console.log(closedBraces,countStar)
        if(closedBraces>countStar) return false ;
        return true ;

};

console.log(checkValidString("(((((*(((((*((**(((*)*((((**))*)*)))))))))((*(((((**(**)"))



let stringToMap = (map, s) => {
    if (map.has(s)) {
        map.set(s, map.get(s) + 1);
    } else {
        map.set(s, 1);
    }
};

const deleteMap = (map, i) => {
    if (map.size !== 0 && map.has(i)) {
        map.delete(i);
    }
};

function sumExceptMax(map) {
    // Get the maximum value from the map
    let maxValue = Math.max(...map.values());

    // Initialize sum to 0
    let sum = 0;

    // Iterate through the map and add values to sum, excluding the maximum value
    for (let [key, value] of map) {
        if (value !== maxValue) {
            sum += value;
        }
    }

    return sum;
}

var characterReplacement = function(s, k) {
    let i = 0;
    let j = 0;
    let map = new Map();
    let ans = 0;
    let maxCount = 0;

    while (j < s.length) {
        stringToMap(map, s[j]);
        maxCount = Math.max(maxCount, map.get(s[j]));

        if ((j - i + 1 - maxCount) > k) {
            deleteMap(map, s[i]);
            i++;
        }

        ans = Math.max(ans, j - i + 1);
        j++;
    }
    return ans;
};

// Test
console.log(characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR", 2)); // Output: 6
