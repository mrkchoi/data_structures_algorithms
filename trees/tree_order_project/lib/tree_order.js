function inOrderArray(root, inOrder=[]) {
    if (!root) return [];
    if (root.left) {
        inOrder = inOrder.concat(inOrderArray(root.left));
    }
    inOrder = inOrder.concat(root.val);
    if (root.right) {
        inOrder = inOrder.concat(inOrderArray(root.right));
    }
    return inOrder;
}

function postOrderArray(root, postOrder=[]) {
    if (!root) return [];
    if (root.left) {
        postOrder = postOrder.concat(postOrderArray(root.left));
    }
    if (root.right) {
        postOrder = postOrder.concat(postOrderArray(root.right));
    }
    postOrder = postOrder.concat(root.val);
    return postOrder;
}


module.exports = {
    inOrderArray,
    postOrderArray
};
