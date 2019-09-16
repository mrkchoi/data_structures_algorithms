/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/


// LC 48. Rotate Image

// given an n x n 2D representing an image, rotate the image by 90 deg clockwise
// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

//     0 1 2
//  0 [1,2,3],
//  1 [4,5,6],
//  2 [7,8,9]

//     0 1 2
//  0 [7,4,1],
//  1 [8,5,2],
//  2 [9,6,3]


// error check: non-array/matrix, empty matrix, matrix.length === 1

// iterate through matrix, flip on diagonal, then flip on vertical axis
// for diagonal, only need to flip items up to diagonal line,
// for vertical flip, only need to flip items up to vertical midpoint


function rotate(matrix) {
  if (!Array.isArray(matrix)) throw new Error("Invalid input: input type must be array");
  if (matrix.length === 1) return matrix;

  // diagonal flip
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // horizontal flip
  for (let i = 0; i < matrix.length; i++) {
    let midIdx = Math.floor(matrix[0].length / 2);
    for (let j = 0; j < midIdx; j++) {
      [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [
        matrix[i][matrix.length - 1 - j],
        matrix[i][j]
      ];
    }
  }

  return matrix;
};


let m1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

let m2 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

rotate(m1);
// rotate(m2);