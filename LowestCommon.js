/* 
I: binary search tree root, two given nodes
O: parent? LCA “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
C: number of nodes 2-100,000, node values are unique, p != q, p & q are in the BST
E: node is the lowest common ancestor
Time Complexity: 
Space Complexity: 

 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

function lowestCommonAncestor(root, p, q) {
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

    return root

}


// console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4))
// // console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8))
// // console.log(lowestCommonAncestor([2,1], 2, 1))