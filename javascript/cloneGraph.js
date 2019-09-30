/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// given a node in a connected undirected graph, return a copy of the entire graph

// error check: !node
// create a map to store all of the nodes that we have already seen,
// we will reference this map to see whether we need to create a new node or whether we can
// use a pointer to a previously created node in order to connect the graph together
// create a closure around a helper function dfs, which will traverse through each node in the graph
// if the node does not exist, we can return out of the function
// if it does exist, we check to see whether it has already been cloned
// if false,
// we create a new node and place a pointer to the node in our map, setting the val of the node
// then, we set the neighbors of the new node by mapping over the original node's neighbors,
// for each neighbor, we recursively call dfs, ensuring that we create the new node if necessary,
// and at the end of the helper function, we return the node by keying into the map
// we need to return each node at the end of each recursive call, because the return value is passed to our map function,
// this will create the new array (neighbors)
// we can then return the initial dfs(node) call, which returns the newly cloned head node

var cloneGraph = function(node) {
  let map = {};
  return dfs(node);

  function dfs(node) {
    if (!node) return;

    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map(neighbor => dfs(neighbor));
    }

    return map[node.val];
  }
};
