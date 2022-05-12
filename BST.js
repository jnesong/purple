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
    const pushToSubQ = (roots) => {
      subQ.push(roots.value)
      queue.push(subQ)
      subQ = []
    }
    if (root.left ) {
      pushToSubQ(root.left)
    }
    if (root.right) {
      pushToSubQ(root.right)
  
    }
  
    return queue
  }