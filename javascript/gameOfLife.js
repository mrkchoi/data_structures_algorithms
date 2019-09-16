/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// rules:
// [1, < 2] => 0
// [1, 2-3] => 1
// [1, > 3] => 0
// [0, = 3] => 1

// error check: array, length === 1

// iterate through each el of board
// generate count of neighbors that are not 0, (generateCounts(board, i, j))
// set new value according to rules (modifyBoard(board, i, j, counts))
// update all board values by %= 2

function gameOfLife(board) {
  if (!Array.isArray(board)) {
    throw new Error("Invalid input: Input type must be array");
  }

  if (board.length === 1 && board[0].length === 1 && board[0][0] === 1) {
    board[0][0] = 0;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let counts = generateCounts(board, i, j);
      modifyBoard(board, i, j, counts);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] %= 2;
    }
  }
}

function generateCounts(board, i, j) {
  let counts = 0;
  for (let i1 = -1; i1 < 2; i1++) {
    for (let j1 = -1; j1 < 2; j1++) {
      let i2 = i + i1;
      let j2 = j + j1;
      let iBounds = i2 >= 0 && i2 < board.length;
      let jBounds = j2 >= 0 && j2 < board[0].length;
      let self = (i2 === i) && (j2 === j);

      if (iBounds && jBounds && !self && (board[i2][j2] === 1 || board[i2][j2] === 2)) {
        counts += 1;
      }
    }
  }
  return counts;
}

function modifyBoard(board, i, j, counts) {
  if (board[i][j] === 1 && (counts < 2 || counts > 3)) {
    board[i][j] = 2;
  } else if (board[i][j] === 0 && counts === 3) {
    board[i][j] = 3;
  }
}









/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// var gameOfLife = function(board) {
//   if (!Array.isArray(board)) throw new Error('Invalid input: input type must be array');

//   if (board.length === 1 && board[0].length === 1) {
//     if (board[0][0] === 1) {
//       return [[0]];
//     } else if (board[0][0] === 0) {
//       return [[0]];
//     }
//   }

//   // let test = new Array(board.length).fill(new Array(board[0].length).fill(0));

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       let neighborCount = 0;

//       for (let i1 = -1; i1 < 2; i1++) {
//         for (let j1 = -1; j1 < 2; j1++) {
//           let i2 = i + i1;
//           let j2 = j + j1;
//           let iBounds = i2 >= 0 && i2 < board.length;
//           let jBounds = j2 >= 0; j2 < board[0].length;
//           let match = (i2 === i) && (j2 === j);

//           // check if in bounds
//           if (iBounds && jBounds && !match) {
//             if (board[i2][j2] !== 0) {
//               neighborCount += 1;
//             }
//           }
//         }
//       }
//       // check value of el at coords
//       if (board[i][j] === 1) {
//         if (neighborCount < 2) {
//           board[i][j] = 2;
//         } else if (neighborCount <= 3) {
//           board[i][j] = 1;
//         } else if (neighborCount > 3) {
//           board[i][j] = 2;
//         }
//       } else if (board[i][j] === 0 && neighborCount === 3) {
//         // debugger
//         board[i][j] = 3;
//       }
//     }
//   }

//   console.log(board);

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       board[i][j] %= 2;
//     }
//   }
//   // console.log(board);
//   // console.log(test);
//   // board = test;
//   // return board;
// };

// let b = [ [ 0, 1, 0 ], [ 0, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ];
// // [ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]

// gameOfLife(b);

// // rules:
// // [1, < 2] => 0
// // [1, 2-3] => 1
// // [1, > 3] => 0
// // [0, = 3] => 1

// // // Input: [
// //   [0, 1, 0],
// //   [0, 0, 1],
// //   [1, 1, 1],
// //   [0, 0, 0]];
// // // Output: [
// //   [0, 0, 0],
// //   [1, 0, 1],
// //   [0, 1, 1],
// //   [0, 1, 0]];

// // 0
// // 1
// // -----------
// // 1
// // 1
// // -----------
// // 0
// // 2
// // -----------
// // 0
// // 3
// // -----------
// // 0
// // 5
// // -----------
// // 1
// // 3
// // -----------
// // 1
// // 1
// // -----------
// // 1
// // 3
// // -----------
// // 1
// // 2
// // -----------
// // 0
// // 2
// // -----------
// // 0
// // 3
// // -----------
// // 0
// // 2
// // -----------
// // [ [ 0, 1, 0 ], [ 0, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]
// // [ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]
