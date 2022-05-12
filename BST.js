class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
    const queue = []
    queue.push([root.value])
    let x = [root.left.value, root.right.value]
    queue.push(x)
    return queue
}

