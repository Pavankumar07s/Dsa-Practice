let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newValue) {
  if (currentSize < maxSize) {
    queue[currentSize] = newValue;
    currentSize++;
  } else {
    console.alert("Queue is already full");
  }
}

// function dequeue() {
//   let removedItem = queue.shift();
//   currentSize--;
//   queue.length = currentSize;
//   return removedItem;
// }
function dequeue() {
    if(currentSize>0){
        for (i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        
            // console.log(queue[i])
          }
          currentSize--;
          queue.length = currentSize;
    }
    else{
        console.alert("Queue is empty")
    }
 
}

function display() {
  console.log(queue);
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
console.log("queue before removing:");
display();
dequeue();
console.log("queue after removing element:")
display();
dequeue();
console.log("queue after removing element:")
display();
dequeue();
console.log("queue after removing element:")
display();
dequeue();
console.log("queue after removing element:")
display();



