let arr = [-5,6,8,9,7];
let si = 0;
let ei = arr.length - 1;

let piviotindex = (arr, si, ei) => {
  let pi = arr[ei];
  let i = si - 1;
  for (j = 0; j < ei; j++) {
    if (arr[j] < pi) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[ei];
  arr[ei] = temp;
  return i;
};

let Quicksort = (arr, si, ei) => {
  if (si < ei) {
    let pi = piviotindex(arr, si, ei);
    Quicksort(arr, si, pi - 1);
    Quicksort(arr, pi + 1, ei);
  }
};

Quicksort(arr, si, ei);
console.log(arr);
