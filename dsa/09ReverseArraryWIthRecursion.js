let data = [2, 3, 5, 6, 9, 8, 4,6];

let customReverse = (data, start, end) => {
    // console.log(data)
  if(start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
  
};

customReverse(data, 0, data.length - 1);

//inbuit function
// let reverseArray=data.reverse()
// console.log(reverseArray)
