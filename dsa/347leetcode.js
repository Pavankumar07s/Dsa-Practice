function countFreq(arr) {
    let arr1=[]
    let k=2
  let mp = new Map();

  // Traverse through array elements and count frequencies
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }

  // Traverse through map and print frequencies
  const mapSort1 = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
  for (let [key] of mapSort1) {
  	arr1.push(key)
  }
  let arr2=arr1.slice(0,k)
  console.log(arr2)
}

let arr = [1,1,1,2,2,3];
countFreq(arr);



///
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    function countFreq(arr, k) {
        let arr1 = [];
        let mp = new Map();

        // Traverse through array elements and count frequencies
        for (let i = 0; i < arr.length; i++) {
            if (mp.has(arr[i])) {
                mp.set(arr[i], mp.get(arr[i]) + 1);
            } else {
                mp.set(arr[i], 1);
            }
        }

        // Traverse through map and push keys into arr1
        const mapSort1 = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]));
        for (let [key] of mapSort1) {
            arr1.push(key);
        }

        return arr1.slice(0, k); // Return the sliced array directly
    }

    return countFreq(nums, k); // Return the result from countFreq
};


