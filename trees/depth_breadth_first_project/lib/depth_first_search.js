

function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.val === targetVal) return node;
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return null;
}

function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;

    let left = depthFirstSearch(root.left, targetVal);
    if (left) return left;
    let right = depthFirstSearch(root.right, targetVal);
    if (right) return right;

    return null;
}

module.exports = {
    depthFirstSearch
};
