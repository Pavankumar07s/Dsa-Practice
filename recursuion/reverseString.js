let name="Pavan"
let si=0
let ei=name.length-1

function reverse(name,si,ei){
        //base case
        if(si>ei){
            return
        }

        //operation
        let temp=name[ei]
        name[si]=name[ei]
        name[ei]=temp

      return reverse(name,si+1,ei-1)

}

reverse(name,si,ei)
console.log(name)