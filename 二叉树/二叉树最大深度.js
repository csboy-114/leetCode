/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth=0
    if(root===null) return depth
    const queue=[root]
    while(queue.length){
      let size=queue.length
      while(size-->0){
        const node=queue.shift()
        if(node.left){
          queue.push(node.left)
        }
        if(node.right){
          queue.push(node.right)
        }
      }
      depth++
    }
    return depth
};