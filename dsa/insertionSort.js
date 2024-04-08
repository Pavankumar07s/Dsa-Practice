let arr=[1,5,8,3,6,8,5,3,9]

// for(i=1;i<arr.length;i++){
//     let current=arr[i]
//     let j=i-1
//     while(arr[j]>current &&j>=0){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=current
// }

// console.log(arr)


// let myMap = new Map();

// // Populate the Map with keys and values
// myMap.set('a', 3);
// myMap.set('b', 2);
// myMap.set('c', 4);

// // Function to decrement values in the Map
// function decrementValues(map,k) {
//     // Iterate through the Map
//     for (let [key, value] of map) {
//         // Decrement the value until it becomes zero
//         while (value > 0 && k>0) {
//             console.log(`Decrementing ${key}: ${value}`);
//             value--;
//             k--
//             map.set(key, value); // Update the value in the Map
//             // If the value becomes zero, move to the next key
//             if (value === 0) break;
//         }
//     }
// }

// // Call the function to decrement values in the Map
// decrementValues(myMap,3);

// // Print the updated Map
// console.log("Updated Map:", myMap);

// for(i=1;i<arr.length;i++){
//     let temp=arr[i]
//     let j=i-1
//     while(arr[j]>temp &&j>=0){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=temp
// }

// console.log(arr)