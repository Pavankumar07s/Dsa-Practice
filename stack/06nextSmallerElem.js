// a="{{{}}}{{}{{}"
// ismain se hame valid nikalne hai aagara valid nahi hai to valid banane main kitna cost lageaga vo return ksrvana hai/**
//  * @param {string} s
// * @return {boolean}
// */
class Stack { 

    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
 
    // push function 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    } 
    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    // peek function 
    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1]; 
    } 
    // isEmpty function 
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    } 
    // printStack function 
    printStack() 
    { 
        let str = ""; 
        for (let i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
 } 
 let nums=[2,3,1]
 let stack = new Stack();
 stack.push(-1)
 let ans=[]
 function MinCost(stack,nums,ans){
    for(let i=nums.length-1;i>=0;i--){
        let current=nums[i]

        while(stack.peek()>=current){
            stack.pop()
        }
        ans[i]=(stack.peek())
        stack.push(current)

    }
      return ans   
 }
 
 console.log(MinCost(stack,nums,ans))
 