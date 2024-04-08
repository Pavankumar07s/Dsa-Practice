let n=[1,2,3,4,5,6,7,8,9]
function solve(n) {
    let count = 0;

    while (n.length > 1) {
        if (count % 2 === 0) {
            for (let i = 0; i < n.length; i += 2) {
                n.splice(i, 1);
            }
        } else {
            for (let i = n.length - 1; i >= 0; i -= 2) {
                n.splice(i, 1);
            }
        }
        count++;
    }
    return n[0];
}


    if (n.length === 0) return 0;
    if (n.length === 1) return n[0];
console.log(solve(n)) ; // Start count from 0
