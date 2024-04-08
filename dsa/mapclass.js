let data = new Map([
    ['name','Pavan'],
    [10,'this is the number key'],
    [true,'this is the bool key']
]);
let a=5;
let b=6;
console.log(data.get(true));
// console.log(data.keys())

data.set('city','pune')
data.set({},'this is object key type')
data.set((a,b)=>{return a+b},'this is arrow fujnction key type')
console.log(data.keys())
// data.set('name','Pavan kumar')
// console.log(data)
// console.log("this is the size of the map class ",data.size)

// data.delete(true)
// console.log(data)


// console.log(data.has(true))


// //for printing
// data.forEach((val,key)=>{
//     console.log(key,":",val)

// })
// for (let [key, value] of data) { 
//     console.log(key + ":" + value); 
// } 