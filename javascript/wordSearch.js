var exist = function(matrix, word) {
  var wordLength = word.length,
    i,
    j;

  word = word.split("");

  var verify = function(row, col, matrix, path) {
    if (
      row < 0 ||
      col < 0 ||
      row >= matrix.length ||
      col >= matrix[0].length ||
      matrix[row][col] != word[path] ||
      path > wordLength
    )
      return false;
    // Up to this point, we found the char we were looking for
    path++;
    matrix[row][col] = "#";

    //If we find the word
    if (path === wordLength) return true;
    //Up
    if (verify(row - 1, col, matrix, path)) return true;
    //Right
    if (verify(row, col + 1, matrix, path)) return true;
    //Down
    if (verify(row + 1, col, matrix, path)) return true;
    //Left
    if (verify(row, col - 1, matrix, path)) return true;
    // Backtrack
    matrix[row][col] = word[--path];
    return false;
  };

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (verify(i, j, matrix, 0)) return true;
    }
  }

  return false;
};







/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


// given a matrix of characters, check to see whether a given word can be found within the matrix by only moving horizontally or vertically. Characters cannot be reused. Returns a boolean indicating a match.

// error check: non-array, n & m < word.length

// init wordLength = word.length
// create helper function to check a given character for a match
// call the helper function on every element in the matrix until we return true,
// otherwise, return false

// helper function:
// conditional check:
// if i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || path > wordLength || word[path] !== matrix[i][j], return false
// if we get past this point, we know that we have a valid character match, so
// increment path
// set matrix[i][j] = '#' (this will prevent us from double checking this same character in our word search)
// then, we should check to see if path === wordLength,
// if true, return true
// then recursively check top, bottom, left, right,
// if any of the recursive calls return true, return true
// if none of them return true,
// we should reset the matrix[i][j] = word[--path]
// return false

// if we get through checking every element in the matrix and our helper function never returns true, we return false


function exist(matrix, word) {
  let wordLength = word.length;

  function check(i,j,matrix,path) {
    if (
      i < 0 || j < 0 || 
      i >= matrix.length || 
      j >= matrix[0].length || 
      word[path] !== matrix[i][j] ||
      path > wordLength
    ) return false;

    path += 1;
    matrix[i][j] = '#';
    
    if (path === wordLength) return true;

    if (check(i - 1, j, matrix, path)) return true;
    if (check(i + 1, j, matrix, path)) return true;
    if (check(i, j - 1, matrix, path)) return true;
    if (check(i, j + 1, matrix, path)) return true;

    matrix[i][j] = word[--path];
    return false;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (check(i,j,matrix,0)) {
        return true;
      }
    }
  }

  return false;
}

















































