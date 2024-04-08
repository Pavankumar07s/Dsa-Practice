let stack = [];

let curentSize = stack.length;
let Max = 5;

let push = (NewVal) => {
  if (curentSize <= Max-1) {
    stack[curentSize] = NewVal;
    curentSize++;
  }
};

let pop =()=>{
    if(curentSize>=0){
        curentSize--
        stack.length=curentSize;
    }
    else{
        console.log("Stack is already empty")
    }
}

push(20);
push(20);
push(203);
push(25);
push(50);
push(30);
push(250);
pop()
pop()
console.log(stack);



let conversation="how are you buddi"

let arr=conversation.split(" ")

console.log(arr)