function numRegions(graph) {
    if (!graph) return;
    let count = 0;
    let visited = new Set();
    
    for (let node in graph) {
        if (_depthFirstRecur(node, graph, visited)) count += 1;
    }

    return count;
}

function _depthFirstRecur(node, graph, visited) {
    if (!node) return;
    if (visited.has(node)) return false;
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });
    
    return true;
}

module.exports = {
    numRegions
};
