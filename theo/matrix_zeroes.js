var setZeroes = function (matrix) {
  let storeCol = {};
  let storeRow = {};
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let el = matrix[row][col];
      if (el === 0) {
        storeCol[col] = true;
        storeRow[row] = true;
      }
    }
  }

  for (let key in storeRow) {
    let row = key;
    for (let r = 0; r < matrix[row].length; r++) {
      matrix[row][r] = 0;
    }
  }

  for (let key in storeCol) {
    let col = key;
    matrix.forEach(row => {
      row[col] = 0;
    });
  }

  return matrix;
};