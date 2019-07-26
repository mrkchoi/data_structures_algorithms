function maxValue(node, visited=new Set()) {
    let max = -Infinity;
    if (!node) return null;
    let queue = [node];
    while (queue.length) {
        let node = queue.shift();
        if (node.val > max) max = node.val;
        if (visited.has(node)) continue;
        visited.add(node);
        node.neighbors.forEach(neighbor => {
            queue.push(neighbor);
        })
    }
    return max;
}

module.exports = {
    maxValue
};