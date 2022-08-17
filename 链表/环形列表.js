/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const arr=[]
    while(head){
      if(arr.includes(head.next)){
        return true
      }
      arr.push(head.next)
      head=head.next
    }
    return false
};