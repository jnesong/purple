class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
    const nodes = []
    if (root) {
        nodes.push(root.value)
        levelOrderTraversal(root.left)
        levelOrderTraversal(root.right)
    }
    return nodes
}

function levelOrderTraversal(root) {
    let queue = []
    let subQ = []
    subQ.push(root.value)
    queue.push(subQ)
    subQ = []
  
    if (root.left){
      subQ.push(root.left.value)
      console.log("next Left", root.left.left)
      // if (root.left.left){ levelOrderTraversal(root.left.left)}
    }
    if(root.right) {
      subQ.push(root.right.value)
      console.log("next Right", root.right.right)
      
    }
    queue.push(subQ)
  
    return queue
  }