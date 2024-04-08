class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size) {
      this.maxSize = size;
      this.currentSize = this.item.length;
    }
    push(newVal) {
        if(this.currentSize>=this.maxSize){
            console.log("stack is full");
        }else{
            this.item[this.currentSize]=newVal;
            this.currentSize++;
        }
    }
    pop() {
        if(this.currentSize>0){
            this.currentSize--;
            this.item.length=this.currentSize;
        }else{
            alert("stack is already empty")
        }
    }
    display() {
        console.warn(this.item)
    }
  }
  st1 = new Stack(5);
  for(i=0;i<6;i++){
    st1.push(20)
  }

  st1.display();