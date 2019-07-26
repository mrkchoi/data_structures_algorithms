function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    if (!startingNode) return null;
    let queue = [startingNode];
    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        if (node.val === targetVal) return node;
        visited.add(node);
        node.neighbors.forEach(neighbor => {
            queue.push(neighbor);
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};