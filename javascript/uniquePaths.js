/**
 * @param {number} m
 * @param {number} n
 * @return {number}
*/

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28

// error check: n || m === 0, return 0
// build nested array of all 1's of size m x n
// set all values of mIdx0 to 1
// set all values of nIdx0 to 1
// for each other element, fill in grid with [m - 1][n] + [m][n - 1]
// return matrix[m - 1][n - 1]

var uniquePaths = function(m, n) {
  if (m === 0 || n === 0) return 0;
  let grid = new Array(n).fill(new Array(m).fill(1));
  
  for (let nIdx = 1; nIdx < n; nIdx++) {
    for (let mIdx = 1; mIdx < m; mIdx++) {
      let topPaths = grid[nIdx - 1][mIdx];
      let leftPaths = grid[nIdx][mIdx - 1];
      let totalPaths = topPaths + leftPaths;
      grid[nIdx][mIdx] = totalPaths;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
