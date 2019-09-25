/**
 * @param {string} digits
 * @return {string[]}
 */

// error check: non-string
// edge case: empty string
// init k/v pair mapping
// init output arr
// create helper function, build, to iterate through all possible combinations
// for each character,
// check to see if newStr.length === digits.length,
// if true, push to output
// if false,
// grab mapping array for current character at idx i
// iterate through each character
// recursively call build with updated idx && updated newStr
// continue recursively calling build method until all possible combinations are created
// return output

// Time: O(2^n)
// Space: O(2^n)

var letterCombinations = function(digits) {
  if (typeof digits !== "string")
    throw new TypeError("Invalid input: input type must be string");
  if (digits.length === 0) return [];

  let map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  let output = [];

  function build(idx, curString) {
    if (curString.length === digits.length) {
      output.push(curString);
      return;
    }
    let curChar = digits[idx];
    let curChars = map[curChar];

    curChars.forEach(char => {
      let newString = curString.concat(char);
      build(idx + 1, newString);
    });
  }

  build(0, "");
  return output;
};
