/* 
I: root
O: true or false
C: number of nodes 0-5000, node value is between -10000 and 10000
E: 
Time Complexity: 
Space Complexity: 

 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
for each node, loop through left, add left nodes to stack then loop through right and pop off
cannot be more than 1 node difference
*/


function isBalanced ( root ) {

    let count = 0
    
    if (root.right) { add(root) }
    if (root.left) { minus (root)}

    function add ( root ) {
        count++
        add(root.right)
    }
    
    function minus (root) {
        count--
        minus (root.left)
    }
    
    
    return count
}




console.log(isBalanced([3,9,20,null,null,15,7]))