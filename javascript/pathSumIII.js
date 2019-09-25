/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
*/

// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


// error check: non-root, sum non-number
// create closure with counter
// dfs through tree
// for each node,
// keep track of all previous sums
// add currentSum to all previous sums, and push currentVal
// if any of the sums === target, increment counter += 1
// continue iterating through all elements of the tree until !left && !right
// return count

// var pathSum = function(root, target) {
//   if (!root) return 0;

//   let count = 0;
//   dfs(root, []);

//   function dfs(node, prevSums) {
//     prevSums = prevSums.map(sum => {
//       return sum + node.val;
//     });

//     prevSums.push(node.val);
//     if (prevSums.includes(target)) {
//       for (let sum of prevSums) {
//         if (sum === target) count += 1;
//       }
//     }
//     if (node.left) dfs(node.left, prevSums);
//     if (node.right) dfs(node.right, prevSums);
//   }

//   return count;
// };




// var pathSum = function(root, sum) {
//   var results = 0;

//   var addSum = function(node, sub_sum) {
//     if (node === null) return;
//     if (sub_sum + node.val === sum) results++;
//     addSum(node.left, sub_sum + node.val);
//     addSum(node.right, sub_sum + node.val);
//   };

//   var traverseNodes = function(node) {
//     if (node === null) return;
//     addSum(node, 0);
//     traverseNodes(node.left);
//     traverseNodes(node.right);
//   };

//   traverseNodes(root);

//   return results;
// };






// init result = 0
// two helper functions, one to traverse nodes with a prevSum === 0
// another helper function, addSum, which will recursively dfs through each node, add the previous sum to the current node
// if the prevSum + currentNode.val === tatget/sum, then increment our counter by 1
// initially the dfs occurs and the sum is accumulated from the root down to the leaves
// after this initial dfs occurs, we then call traverseNodes on the left and right children
// this will reset our sum total back to 0 and recursively dfs with our new left and right starting points
// one all dfs and node traversals are completed, we can return the total result which will be all instance within our tree where our subsum === target

const pathSum = function(root, sum) {
  let res = 0;

  function addSum(node, prevSum) {
    if (!node) return;
    if (node.val + prevSum === sum) res += 1;
    if (node.left) addSum(node.left, prevSum + node.val);
    if (node.right) addSum(node.right, prevSum + node.val);
  }

  function traverseNode(node) {
    if (!node) return;
    addSum(node, 0);
    if (node.left) traverseNode(node.left);
    if (node.right) traverseNode(node.right);
  }

  traverseNode(root);

  return res;
}