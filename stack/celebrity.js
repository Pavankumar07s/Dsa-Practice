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
    // size function
    size() {
        // return the size of the stack
        return this.items.length;
    }
 } 


 //code starts from here

let n = 3
let m = [[0, 1, 0],
         [0 ,0 ,0], 
         [0 ,1 ,0]]

function knows(m,a,b){
    if(m[a][b]==1){
        return true
    }
    else{
        return false
    }
}
function celebrity(n,m){

    let stack =new Stack()

    for(let i=0;i<n;i++){
        stack.push(i)
    }

    while(stack.size()>1){
        let a=stack.pop()
        let b=stack.pop()

        if(knows(m,a,b)){
            stack.push(b)
        }
        else{
            stack.push(a)
        }
    }

    let ans=stack.peek()


    //verifying weather the candidate is celebrity or not

    let zeroCount=0
    for(let i=0;i<n;i++){
        if(m[ans][i]==0){
            zeroCount++
        }
    }

    if(zeroCount!=n){
        return -1
    }

    let oneCount=0
    for(let i=0;i<n;i++){
        if(m[i][ans]==1){
            oneCount++
        }
    }

    if(oneCount!=n-1){
        return -1
    }

    return ans
}

console.log(celebrity(n,m))