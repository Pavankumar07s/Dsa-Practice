/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {
  let prevPointer = null;
  let currentPointer = head;
  
  while (currentPointer!=null) {
     let  nextPointer = currentPointer.next;
      currentPointer.next = prevPointer;

      prevPointer = currentPointer;
      currentPointer = nextPointer;

  }
  console.log(prevPointer)
  return prevPointer;

}


function compareLists(head, reverseList) {
  let head1 = head;
  let head2 = reverseList;
  while (head1 && head2) {
      if (head1.val != head2.val) {
          return false;
      }
      head1 = head1.next;
      head2 = head2.next;
  }
  return true;
}
let head =[1,1,3]
var isPalindrome = function (head) {
  let reverseList = reverseLinkedList(head);
  return compareLists(head, reverseList);
};

console.log(isPalindrome(head))