/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// error check: non-array
// edge case: empty matrix => matrix.length === 1, matrix[0].length === 0
// edge case #2: single element

var searchMatrix = function(matrix, target) {
  if (!Array.isArray(matrix) || typeof target !== "number")
    throw new TypeError("Invalid input");
  if (matrix.length === 0 || (matrix.length === 1 && matrix[0].length === 0))
    return false;

  if (
    target < matrix[0][0] ||
    target > matrix[matrix.length - 1][matrix[0].length - 1]
  )
    return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col -= 1;
    } else if (matrix[row][col] < target) {
      row += 1;
    }
  }

  return false;
};

// function searchMatrix(matrix, target) {
//   if (!matrix.length || !matrix[0].length) return false;

//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (col >= 0 && row <= matrix.length - 1) {
//     if (matrix[row][col] === target) return true;
//     else if (matrix[row][col] > target) col--;
//     else if (matrix[row][col] < target) row++;
//   }

//   return false;
// }

// var searchMatrix = function(matrix, target) {
//   if (!Array.isArray(matrix) || typeof target !== "number")
//     throw new TypeError("Invalid input");
//   if (matrix.length === 0 || (matrix.length === 1 && matrix[0].length === 0)) return false;

//   let mStart = 0;
//   let mEnd = matrix.length - 1;
//   let nStart = 0;
//   let nEnd = matrix[0].length - 1;

//   if (target < matrix[mStart][nStart] || target > matrix[mEnd][nEnd]) return false;

//   // console.log(mStart, mEnd, nStart, nEnd);

//   while (mStart <= mEnd || nStart <= nEnd) {
//     // rows
//     let i1 = mStart;
//     while (i1 <= mEnd) {
//       let first = matrix[i1][nStart];
//       let last = matrix[i1][nEnd];
//       if (target === first || target === last) return true;
//       if (target < first || target > last) {
//         mStart += 1;
//       } else if (target > first && target < last) {
//         break;
//       }
//       i1 += 1;
//     }

//     let i2 = mEnd;
//     while (i2 >= mStart) {
//       let first = matrix[i2][nStart];
//       let last = matrix[i2][nEnd];
//       if (target === first || target === last) return true;
//       if (target < first || target > last) {
//         mEnd -= 1;
//       } else if (target > first && target < last) {
//         break;
//       }
//       i2 -= 1;
//     }

//     if (mStart >= matrix.length || mEnd < 0) return false;

//     // cols
//     let j1 = nStart;
//     while (j1 <= nEnd) {
//       let first = matrix[mStart][j1];
//       let last = matrix[mEnd][j1];
//       if (target === first || target === last) return true;
//       if (target < first || target > last) {
//         nStart += 1;
//       } else if (target > first && target < last) {
//         break;
//       }
//       j1 += 1;
//     }

//     let j2 = nEnd;
//     while (j2 >= nStart) {
//       let first = matrix[mStart][j2];
//       let last = matrix[mEnd][j2];
//       if (target === first || target === last) return true;
//       if (target < first || target > last) {
//         nEnd -= 1;
//       } else if (target > first && target < last) {
//         break;
//       }

//       j2 -= 1;
//     }

//     if (nStart >= matrix[0].length || nEnd < 0) return false;

//     // console.log(mStart, mEnd, nStart, nEnd);
//     // break;
//   }

//   return false;
// }

// // // brute force: iterate through all elements, if found, return true,
// // // else, return false

// // var searchMatrix = function(matrix, target) {
// //   if (!Array.isArray(matrix) || typeof target !== "number")
// //     throw new TypeError("Invalid input");
// //   if (matrix.length === 1 && matrix[0].length === 0) return false;

// //   for (let i = 0; i < matrix.length; i++) {
// //     for (let j = 0; j < matrix[0].length; j++) {
// //       if (matrix[i][j] === target) return true;
// //     }
// //   }

// //   return false;
// // };
