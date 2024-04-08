let data = [1, 2, 3, 4, 5];
let currentSize = data.length;
let data1 = [];
function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function clcf(item) {
  for (let i = 0; i <= item.length; i++) {
    let popElement = pop();
    let elemMultiply = data.reduce((value1, value2) => {
      return value1 * value2;
    });
    item.unshift(popElement);
    console.log(item);
    data1.push(elemMultiply);
    console.log(data1);
  }
}

clcf(data);
let final = data1.reverse();
console.log(final);
