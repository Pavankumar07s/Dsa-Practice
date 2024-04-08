// addding element at any index
let arr=[1,35,6,9,8,45]
let newelement=56
let position=3

console.log(arr)
for(i=arr.length-1;i>=0;i--){
    if(i>=position){
        arr[i+1]=arr[i]
        if(i==position){
            arr[i]=newelement
        }
    }
}

console.log(arr)

///built in meathod

arr.splice(3,0,newelement) //pehle kon se index pe operatioon hoga ,dusra usske aage kitne index tak number ko delete karna hai or tesra ki tumko kya array main insrt karvana hai
console.log(arr)