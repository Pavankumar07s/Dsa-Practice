let str = "bhaskfhfugbbaklda";
let findchar = "a";
let si = 0;
let ei = str.length - 1;
let i = -1;
let j = -1;
let firstandLast = (str, si, ei, findchar) => {
  if (si > ei) {
    console.log(i);
    console.log(j);
    return;
  }
  if (str[si] === findchar) {
    if (i === -1) {
      i = si;
    } else {
      j = si;
    }
  }

  firstandLast(str, si + 1, ei, findchar);
};
firstandLast(str, si, ei, findchar);
