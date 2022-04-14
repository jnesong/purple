/* 
I: root of binary tree
O: inverted root
C: tree has 0 to 100 nodes, node value is between -100 and 100
E: no nodes
Time Complexity: 
Space Complexity: 
*/



function invertTree ( root ) {
    if (root) {
        let temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
    }

    return root

}