function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};
//insert
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    //If first node
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};
var sll1 = new SinglyLinkedList();
// sll1.insert(1); // linked list is now: 1 -> null
// sll1.insert(12); // linked list is now: 12 -> 1 -> null
// sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null


//print list
SinglyLinkedList.prototype.printList = function () {
  let current = this.head;
  let result = "";
  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }
  result += "null";
  console.log(result);
};

// sll1.printList();
sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12);
//AddElementAtLast
SinglyLinkedList.prototype.addLast = function (value) {
  

  // If the list is empty, make the new node the head
  if (!this.head) {
    this.head = new SinglyLinkedListNode(value);
    return;
  }

  // Traverse the list to find the last node
  let current = this.head;
  while (current.next) {
    current = current.next;
  }

  // Set the next of the last node to the new node
  current.next = new SinglyLinkedListNode(value);
};




//Remove 


SinglyLinkedList.prototype.remove = function(value) {
    var currentHead = this.head;
    if (currentHead.data == value) {
        // just shift the head over. Head is now this new value
        this.head = currentHead.next;
        this.size--;
    } else {
        var prev = currentHead;
        while (currentHead.next) {
            if (currentHead.data == value) {
                // remove by skipping
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break; // break out of the loop
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        //if wasn't found in the middle or head, must be tail
        if (currentHead.data == value) {
            prev.next = null;
        }
        this.size--;
    }
}
// sll1.insert(1); // linked list is now:  1 -> null
// sll1.insert(12); // linked list is now: 12 -> 1 -> null
// sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
// sll1.remove(12); // linked list is now: 20 -> 1 -> null
// sll1.remove(20); // linked list is now: 1 -> null


// deleteAtHead
SinglyLinkedList.prototype.deleteAtHead = function () {
  var toReturn = null;

  if (this.head !== null) {
    //to return ye bata raha hai ki aab head kon hai
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--
  }
  return toReturn;
  
};

// deleteAtTail
SinglyLinkedList.prototype.deleteAtTail = function () {
  if (!this.head || !this.head.next) {
    this.head = null;
    return;
  }
  //treverse the list
  let current = this.head;
  let prev = null;
  while (current.next) {
    prev = current;
    current = current.next;
  }
  prev.next = null;
  this.size--
};

var sll1 = new SinglyLinkedList();
sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
sll1.insert(30); // linked list is now: 20 -> 12 -> 1 -> null
sll1.deleteAtHead(); // linked list is now:  12 -> 1 -> null
// sll1.deleteAtTail()
sll1.printList();


// console.log(sll1)



SinglyLinkedList.prototype.ReverseLinkedList=function(){
  let prevPointer=null;
  let currentPointer=this.head;
  let nextPointer
  while(currentPointer){
     nextPointer=this.head.next;
    currentPointer.next=prevPointer;

    prevPointer=currentPointer;
    currentPointer=nextPointer;
    
  }
  return prevPointer;
}

sll1.ReverseLinkedList();
sll1.printList()