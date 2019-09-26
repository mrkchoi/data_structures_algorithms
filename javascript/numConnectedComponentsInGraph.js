// var countComponents = function(n, edges) {
//     const adjList = constructAdjacencyList(n, edges)
//     const visited = {}
//     let count = 0

//     for (let i = 0; i<n; i++) {
//         if (!visited[i]) {
//             count++
//             dfs(i, adjList, visited)
//         }
//     }
//     return count
// };

// function dfs(v, adjList, visited) {
//     if (v in visited) return
//     visited[v] = true
//     const neighbors = adjList[v]
//     for (let i = 0; i<neighbors.length; i++) {
//         dfs(neighbors[i], adjList, visited)
//     }
// }

// function constructAdjacencyList(n, edges) {
//     const adjList = new Array(n)
//     for (let i = 0; i<n; i++) {
//         adjList[i] = []
//     }
//     for (let i = 0; i<edges.length; i++) {
//         const edge1 = edges[i][0]
//         const edge2 = edges[i][1]
//         adjList[edge1].push(edge2)
//         adjList[edge2].push(edge1)
//     }
//     return adjList
// }

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
// */

// // LC 323. Number of Connected Components in an Undirected Graph

// // Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

// // Example 1:

// // Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

// //      0          3
// //      |          |
// //      1 --- 2    4

// // Output: 2
// // Example 2:

// // Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

// //      0           4
// //      |           |
// //      1 --- 2 --- 3

// // Output:  1
// // Note:
// // You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// // error check: non-number, non-array
// // edge case: n === 0 || edges.length === 0

// // init adjList && seen {}
// // init count = 0
// // iterate through edges,
// // for each edge,
// // if !adjList[edge[0]], set to [edge[1]]
// // else, << edge[1]
// // then, iterate through keys of adjList
// // for each key,
// // if !seen[key], increment count += 1
// // add to seen obj,
// // iterate through each value in array
// // add each value to seen obj
// // if adjList[value], dfs(adjList, value...)
// // continue to dfs through adjList, adding to seen
// // return count

// // n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

// // adjList = {
// //   0: [1],
// //   1: [2],
// //   3: [4]
// // }

// // seen = {
// //   0
// //   1
// //   2
// //   3
// //   4
// //
// //
// // }

var countComponents = function(n, edges) {
  if (!Array.isArray(edges) || typeof n !== "number")
    throw new Error("Invalid input");
  if (n === 1 && edges.length === 0) return 1;

  let adjList = {};
  let seen = {};
  let count = 0;

  edges.forEach(edge => {
    let first = edge[0];
    let second = edge[1];

    if (!adjList[first]) {
      adjList[first] = [second];
    } else {
      adjList[first].push(second);
    }

    if (!adjList[second]) {
      adjList[second] = [first];
    } else {
      adjList[second].push(first);
    }
  });

  for (let key in adjList) {
    if (!seen[key]) {
      count += 1;
      seen[key] = true;

      adjList[key].forEach(node => {
        // seen[node] = true;
        if (adjList[node]) {
          dfs(adjList, seen, node);
        }
      });
    }
  }

  let lonelyNodes = n - Object.values(seen).length;
  return count + lonelyNodes;
};

function dfs(adjList, seen, node) {
  if (!seen[node]) {
    seen[node] = true;
    adjList[node].forEach(childNode => {
      if (adjList[childNode]) {
        dfs(adjList, seen, childNode);
      }
    });
  }
}
