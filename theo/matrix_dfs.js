const matrix = [
  ['x', 'x', 'x', 'o', 'o', 'o'],
  ['o', 'o', 'x', 'x', 'x', 'x'],
  ['o', 'o', 'x', 'o', 'o', 'o'],
  ['o', 'x', 'x', 'o', 'o', 'o'],
  ['o', 'x', 'o', 'o', 'o', 'o'],
  ['x', 'x', 'x', 'x', 'o', 'o']
]

function dfs(coord, mtxLen) {
  let stack = [coord];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current[1] === mtxLen) {
      return current;
    }
    let neighbors = getNeighbors(current);
    neighbors.forEach(tuple => {
      stack.push(tuple);
    })
  }
  return null;
}

function getNeighbors(pos) {
  let ans = [];
  if (matrix[pos[0] - 1] && matrix[pos[0] - 1][pos[1]] && matrix[pos[0] - 1][pos[1]] === 'x') {
    ans.push([pos[0] - 1, pos[1]]);
  }
  if (matrix[pos[0]][pos[1] - 1] && matrix[pos[0]][pos[1] - 1] === 'x') {
    ans.push([pos[0], pos[1] - 1]);
  }
  if (matrix[pos[0] + 1][pos[1]] && matrix[pos[0] + 1][pos[1]] === 'x') {
    ans.push([pos[0] + 1, pos[1]]);
  }
  if (matrix[pos[0]][pos[1] + 1] && matrix[pos[0]][pos[1] + 1] === 'x') {
    ans.push([pos[0], pos[1] + 1]);
  }
  return ans;
}

// input coord is [0, 0], mtxLen is Matrix.length. 
// output should be [1, 5]

console.log(dfs([0, 0], matrix.length - 1))