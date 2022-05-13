class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
  const result = []
  result.push([root.value])
  return innerTraversal(root, result)
}


function innerTraversal (root, result){

  if (root) {
    result.push([root.left.value, root.right.value])
    if (root.left.left !==null || root.left.right !==null) {innerTraversal(root.left, result)}
    if (root.right.right !==null || root.right.left !==null) {innerTraversal(root.right, result)}
  }

  return result
}
