/* 
I: root
O: boolean
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

*/


function isBalanced(root) {
    if (!root) return true; // current node is not-true (null)), return true
    
    if (Math.abs( getHeight(root.left)-getHeight(root.right) )>1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(root) {
    if(!root) return 0; //current node is not-true (null), return 0
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    return Math.max(left, right) +1;
};

