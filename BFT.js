class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
  if(root === null){
    return []
  }
  let queue = [root]
  let result = [root.value]

  addToResult(result, queue, root)
  
  return result;
}

function addToResult(result, queue, node){

  //the queue keeps track of the traversal order
  if(node.left){
    queue.push(node.left);
    result.push(node.left.value)
  }
  if(node.right){
    queue.push(node.right);
    result.push(node.right.value)
  }

  queue.shift();

  if(queue.length != 0){
    addToResult(result, queue, queue[0]);
  }
}