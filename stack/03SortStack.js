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
stack.push(10); 
stack.push(20); 
stack.push(30);
stack.push(15); 
stack.push(4);
console.log(stack)


function sortedInsert(stack,temp){
    //base case
    if(stack.isEmpty() || !stack.isEmpty()&&stack.peek()<temp){
        stack.push(temp)
        return
    }

    let temp1=stack.pop()

    //recursive call
    sortedInsert(stack,temp)

    stack.push(temp1)

}

function sortStack(stack){
    //base case
    if(stack.isEmpty()){
        return
    }

    let temp=stack.pop()
    //recursive call
    sortStack(stack)

    sortedInsert(stack,temp)

}
sortStack(stack)
console.log(stack.printStack())

