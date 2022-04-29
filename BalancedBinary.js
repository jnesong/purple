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


function isBalanced(root) {

    if (!root) return true;
    let count = 0

    leftMinus(root);
    rightAdd(root);

    function leftMinus(root){
        console.log(root, count)
        if (!root) {return console.log("end")}
        count--
        leftMinus(root.left);
    }
    function rightAdd(root){
        console.log(root, count)
        if (!root) {return console.log("end")}
        count++
        rightAdd(root.right);
    }
    
    
    if (count>=-2 && count<=2) {
        return true
    } else {
        return false
    }
}

console.log(isBalanced([1,2,3,4,5,6,null,8]))
// console.log(isBalanced([3, 9, 20, null, null, 15, 7]))