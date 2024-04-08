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

let stack = new Stack();
function MinCost(stack){
        let s="}}}{{{}}{}{{}"
        let openBraces=0
        let closedBraces=0
        for(let i=0;i<s.length;i++){
            if(s[i]=='{'){
                stack.push(s[i])
                openBraces++
            }
            else{
                if(s[i]="}" && stack.peek()=="{"){
                    stack.pop()
                    openBraces--
                }
                else{
                    stack.push(s[i])
                    closedBraces++
                }
            }
        }
        console.log(openBraces,closedBraces)
        let cost=Math.floor((openBraces+1)/2)+Math.floor((closedBraces+1)/2)
        return cost
}

console.log(MinCost(stack))
