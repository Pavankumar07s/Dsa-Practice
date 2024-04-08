
function circularLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function circularLinkedList() {
    this.tail = null;
    this.size = 0;
}

circularLinkedList.prototype.insertAtHead = function(value) {
    if (this.tail === null) { // If first node
        let temp = new circularLinkedListNode(value);
        this.tail = temp;
        this.tail.next = temp;
    } else {
        var temp = new circularLinkedListNode(value);
        temp.next = this.tail.next;
        this.tail.next = temp;
    }
    this.size++;
}

circularLinkedList.prototype.insertNode = function(element, data) {
    if (this.tail == null) {
        var temp = new circularLinkedListNode(data);
        this.tail = temp;
        temp.next = temp;
    } else {
        var temp = new circularLinkedListNode(data);
        let current = this.tail;
        while (current.data !== element && current.next !== this.tail) {
            current = current.next;
        }
        temp.next = current.next;
        current.next = temp;
        if (current === this.tail) {
            this.tail = temp;
        }
    }
    this.size++;
}

circularLinkedList.prototype.printList = function() {
    if (this.tail === null) {
        console.log("Circular Linked List is empty.");
        return;
    }

    let current = this.tail.next;
    let output = "";

    do {
        output += current.data + " ";
        current = current.next;
    } while (current !== this.tail.next);

    console.log("Circular Linked List: " + output);
}
circularLinkedList.prototype.deleteNode = function(data) {
    if (this.tail == null) {
        return -1;
    } else {
        let previous = this.tail;
        let current = previous.next;

        // If the node to be deleted is the tail
        if (this.tail.val === data) {
            if (this.tail === this.tail.next) { // If it's the only node in the list
                this.tail = null;
            } else {
                this.tail = current.next; // Update the tail pointer
                previous.next = this.tail;
            }
            current.next = null;
            delete current;
            this.size--;
            return;
        }

        // Traverse until the node with the given data is found
        while (current !== this.tail && current.val !== data) {
            previous = current;
            current = current.next;
        }

        if (current.val === data) {
            previous.next = current.next;
            current.next = null;
            delete current;
            this.size--;
        } else {
            // Node with data not found
            return -1;
        }
    }
};









// Testing the code
var cll1 = new circularLinkedList();
cll1.insertAtHead(5);
cll1.insertNode(5,3);
cll1.insertNode(3,6)
cll1.insertNode(5,5)
cll1.insertNode(6,5)
cll1.insertNode(5,7)

console.log(cll1); // Just to verify the structure
cll1.printList()
cll1.deleteNode(3)
cll1.printList()
