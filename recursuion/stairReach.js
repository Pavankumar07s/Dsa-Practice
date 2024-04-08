function stair(nStairs) {
  //base case
  if (nStairs < 0) return 0;
  if (nStairs == 0) return 1;

  let ans = stair(nStairs - 1) + stair(nStairs - 2);
  return ans;
}

// console.log(stair(2));
console.log(stair(4));
console.log(stair(5));
