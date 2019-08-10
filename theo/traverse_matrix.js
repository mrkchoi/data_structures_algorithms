let myMatrix = [
  [1,1,1,1,1], 
  [1,1,1,1,1], 
  [1,2,1,2,1], 
  [1,1,1,1,1], 
  [1,2,2,1,1]
]

function countPaths(matrix, row = 0, col = 0) {
  if (!validSquare(matrix, row, col)) { return 0 }
  if (reachedEnd(matrix, row, col)) { return 1 }
  return countPaths(matrix, row + 1, col) + countPaths(matrix, row, col + 1)
}

function validSquare(matrix, row, col) {
  if (row > matrix.length - 1) {return false}
  if (col > matrix.length - 1) {return false}
  if (matrix[row][col] === 2) {
    return false;
  }
  return true;
}

function reachedEnd(matrix, row, col) {
  if (row === matrix.length - 1 && col === matrix.length - 1) {
    return true;
  } 
  return false;
}

// should return the number of ways to get from the top left corner
// to the bottom right corner. 

console.log(countPaths(myMatrix));