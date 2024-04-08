function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1; // Check if index is valid
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.data; // Return the value of the node at the given index
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new SinglyLinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new SinglyLinkedListNode(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return; // Check if index is valid
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let newNode = new SinglyLinkedListNode(val);
    let prev = null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
    }
    newNode.next = current;
    prev.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return; // Check if index is valid
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let prev = null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
    }
    prev.next = current.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
