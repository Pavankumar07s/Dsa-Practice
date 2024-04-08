let arr = [2, 5, 6, 2, 7, 0, 9];
let n = arr.length;

let partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  i++;
  // Swap with pivot
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;
  return i;
};

let quickSort = (arr, low, high) => {
  if (low < high) {
    let pidx = partition(arr, low, high);
    quickSort(arr, low, pidx - 1);
    quickSort(arr, pidx + 1, high);
  }
};

quickSort(arr, 0, n - 1);
console.log(arr);
