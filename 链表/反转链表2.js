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
var reverseList = function(head) {
  if(head===null) return null
  const stack=[]
  while(head){
    stack.push(head)
    head=head.next
  }
  let newHead=stack.pop()
  let current=newHead
  while(stack.length>0){
    current.next=stack.pop()
    current=current.next
  }
  current.next=null
  return newHead
};