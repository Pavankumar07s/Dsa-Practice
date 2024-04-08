let arr = [5, 6, 9, 8, 2, 11, 5, 6];
let si = 0;
let ei = arr.length - 1;
arr.sort((a,b)=>a-b);

function binarySearch(arr, si, ei, n) {
  //base case
  
  if (si > ei) {
    return false;
  }

  //opereation

  let mid = Math.floor(si + (ei - si) / 2);

  if (arr[mid] == n) {
    return mid;
  } else if (arr[mid] < n) {
    return binarySearch(arr, mid + 1, ei,n);
  } else {
    return binarySearch(arr, si, mid - 1,n);
  }
}

console.log(binarySearch(arr, si, ei,3));
