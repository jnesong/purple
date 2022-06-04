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
    if (root===null) return true; //if the root is null, then its balanced, return true 

    return getHeight(root)!==-1;
};

function getHeight (node){
    if (node===null) return 0;

    let left = getHeight(node.left); //recursion moves the start to the very last left node
    let right = getHeight(node.right); //recursion moves the start to the very last right node

    //now check if unbalanced, if unbalanced make its value/ the return of getHeight -1
    if( Math.abs(left-right)>1 || left===-1 || right===-1) {
        return -1; // carries any -1s up the tree
    };
    return Math.max(left, right)+1; // returns max height (bw left and right) plus one to account for the current tree level
}

