// LC 73. Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// error checking: empty matrix, only one row, non-array input

// iterate through each element of the matrix (i,j)
// for each element, check if value is 0,
// if 0,
// while (0 < i < matrix.length && 0 < j <= matrix[0].length),
// if !== 0, set to 0,
// continue until all vertical/horizontal values are set to 0

// error check
// init (2) sets, one for rows, one for columns
// iterate through each element in matrix
// if matrix[i][j] === 0,
// row.set(i), col.set(j)

// this will fill our row && col sets with all of the rows and columns that should have all values set to 0

// nested loop through matrix, check if row set contains i,
// if true, set position to 0
// nested loop through matrix, check if col set contains j,
// if true, set position to 0

function setZeroes(matrix) {
    if (!Array.isArray(matrix)) throw new TypeError('Invalid input: input type must be array');
    if (matrix.length === 0) return;

    let rows = new Set();
    let cols = new Set();

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          rows.add(i);
          cols.add(j);
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (rows.has(i)) {
          matrix[i][j] = 0;
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (cols.has(j)) {
          matrix[i][j] = 0;
        }
      }
    }
}

// function setZeroes(matrix) {
//   let firstColHasZero = false;
//   let firstRowHasZero = false;

//   // Check if first col has zero
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i][0] === 0) {
//       firstColHasZero = true;
//       break;
//     }
//   }

//   // Check if first row has zero
//   for (let j = 0; j < matrix[0].length; j++) {
//     if (matrix[0][j] === 0) {
//       firstRowHasZero = true;
//       break;
//     }
//   }

//   // Use first row and col as flags, set matrix[i][0] and matrix[0][j] to 0 if matrix[i][j] is 0
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[0].length; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[i][0] = 0;
//         matrix[0][j] = 0;
//       }
//     }
//   }

//   // Zero out cells based on flags in first row and col
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[0].length; j++) {
//       if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   // Zero out first col
//   if (firstColHasZero) {
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][0] = 0;
//     }
//   }

//   // Zero out first row
//   if (firstRowHasZero) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       matrix[0][j] = 0;
//     }
//   }
// }

// var setZeroes = function(matrix) {
//   if (!Array.isArray(matrix)) throw new TypeError('Invalid input: input type must be array');
//   if (matrix.length === 0) return;

//   let test = [];

//   for (let i = 0; i < matrix.length; i++) {
//     let row = [];
//     for (let j = 0; j < matrix[0].length; j++) {
//       row.push(matrix[i][j]);
//     }
//     test.push(row);
//   }

//   console.log(test);

//   for (let i1 = 0; i1 < matrix.length; i1++) {
//     for (let j1 = 0; j1 < matrix[i1].length; j1++) {
//       if (test[i1][j1] === 0) {
//         let i = 0;

//         while (i >= 0 && i < matrix.length) {
//           if (test[i][j1] !== 0) {
//             matrix[i][j1] = 0;
//           }
//           i += 1;
//         }

//         let j = 0;
//         while (j >= 0 && j < matrix[0].length) {
//           if (test[i1][j] !== 0) {
//             matrix[i1][j] = 0;
//           }
//           j += 1;
//         }
//       }
//     }
//   }

// };
