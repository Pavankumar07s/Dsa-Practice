let arr = [2, 6, 9, 7, 8, 4, 7, 3, 4,5,12,10,-1];
let n = arr.length;

let conquer = (arr, si, mid, ei) => {
  let merged = [];
    let idx1 = si;
    let idx2 = mid + 1;
    while (idx1 <= mid && idx2 <= ei) {
      if (arr[idx1] < arr[idx2]) {
        merged.push(arr[idx1]);
        idx1++;
      } else {
        merged.push(arr[idx2]);
        idx2++;
      }
    }
    while (idx1 <= mid) {
      merged.push(arr[idx1]);
      idx1++;
    }
  
    while (idx2 <= ei) {
      merged.push(arr[idx2]);
      idx2++;
    }
    for (let i = 0, j = si; i < merged.length; i++, j++) {
      arr[j] = merged[i];
    }
    
  };
  

let divide = (arr, si, ei) => {
  if(si<ei){
    let mid = Math.floor(si + (ei - si) / 2); // Use Math.floor to ensure mid is an integer
    divide(arr, si, mid);
    divide(arr, mid + 1, ei);
    conquer(arr, si, mid, ei);
  }
  
};

divide(arr, 0, n - 1);
console.log(arr)

