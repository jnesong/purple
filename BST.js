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
    let x = innerTraversal(root)
    result.push(x)
    return result
  }
  
  function innerTraversal (root){
    let x = 0
    if (root) {
      x = [root.left.value, root.right.value]
      if (root.left.left !==null) {innerTraversal(root.left)}
      if (root.right.right !==null) {innerTraversal(root.right)}
    }
    return x
  }
