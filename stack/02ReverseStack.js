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
console.log(stack)
function putAtBott(stack,elem){
	//base case
	if(stack.isEmpty()){
		stack.push(elem)
		return
	}

	let temp=stack.pop()

	//recursive function
	putAtBott(stack,elem)

	stack.push(temp)

}
function revStack(stack) {
	// Base case
   
	if (stack.isEmpty()) {
		return;
	}

	let temp = stack.pop();

	// Recursive call
	revStack(stack);

	putAtBott(stack,temp)
}

function reverseStack(stack) {
	revStack(stack);

	console.log(stack.printStack());
}

reverseStack(stack);
