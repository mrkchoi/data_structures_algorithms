function breadthFirstArray(root) {
    if (!root) return null;
    let output = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        output.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return output;
}



module.exports = {
    breadthFirstArray
};