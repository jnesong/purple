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