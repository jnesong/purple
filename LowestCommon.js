/* 
I: binary search tree root, two given nodes
O: parent? LCA “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
C: number of nodes 2-100,000, node values are unique, p != q, p & q are in the BST
E: node is the lowest common ancestor
Time Complexity: 
Space Complexity: 

map p's parents, and check if q's is in the map
*/

function lowestCommonAncestor (root, p, q) {

    let map = {}

    let smaller = Math.min(p,q)
    console.log(smaller)

    
}

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4))