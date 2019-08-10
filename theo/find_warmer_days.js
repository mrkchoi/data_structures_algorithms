var dailyTemperatures = function (T) {
  let result = [];
  for (let i = 0; i < T.length; i++) {
    let counter = 1;
    if (i === T.length - 1) {
      result.push(0);
    }
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        result.push(counter);
        break;
      }
      if (j === T.length - 1) {
        result.push(0);
      }
      counter += 1;
    }
  }
  return result;
};

// ^^ O(N**2) solution to warm up