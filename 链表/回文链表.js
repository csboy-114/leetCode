/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function (head) {
  const arr=[]
  while(head){
    arr.push(head.val)
    head=head.next
  }
  let i=0
  while(i<arr.length/2){
    if(arr[i]!==arr[arr.length-1-i]){
      return false
    }
    i++
  }
  return true
};
