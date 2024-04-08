let a = 3;
let b = 5;

function aToPowerB(a, b) {
  //base case
  if (b == 0) {
    return 1;
  }
  let ans = a * aToPowerB(a,b - 1);
  return ans;
}

console.log(aToPowerB(a,b))
