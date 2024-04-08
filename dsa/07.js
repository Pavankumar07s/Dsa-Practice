    //merging array with sorted form
  let mergeSortedArrays=(array1, array2)=>{
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
        mergedArray.push(array2[j]);
        j++;
      }
    }
  
    while (i < array1.length) {
      mergedArray.push(array1[i]);
      i++;
    }
  
    while (j < array2.length) {
      mergedArray.push(array2[j]);
      j++;
    }
  
    return mergedArray;

  }
  
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  
  console.log(mergeSortedArrays(array1, array2)); // [1, 2, 3, 4, 5, 6, 7, 8]