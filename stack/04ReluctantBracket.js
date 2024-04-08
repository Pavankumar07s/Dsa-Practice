/**
 * @param {string} s
 * @return {boolean}
 */
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
function IsReluctance(stack){
let s="(a+((a+b)))"


for(i=0;i<s.length;i++){
   if(s[i]=='('|| s[i]=='+'|| s[i]=='-'|| s[i]=='*'|| s[i]=='/'){
    stack.push(s[i])
   }

   else{
        if(s[i]==')'){
            let isReluctant=true
            // let top=stack.peek()
            while(stack.peek()!='('){
                if(stack.peek()=="+"||stack.peek()=="-"||stack.peek()=="*"||stack.peek()=="/"){
                    isReluctant=false
                }
                stack.pop()
            }

            
            if(isReluctant==true){
                return true
            }
            stack.pop()
        }
   }
}
}

console.log(IsReluctance(stack))
