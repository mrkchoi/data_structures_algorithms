/**
 * @param {string} s
 * @return {number}
*/

// given a string input containing integers, return the number of ways that the integers can be mapped given a 1-26 character mapping

// error check: non-string
// init dp array => new Array(s.length + 1).fill(0)
// set array[0] = 1, array[1] = if first element is 0, set to 0, else 1
// iterate through from 2 up to s.length
// at each iteration,
// init single digit (at idx i), and twoDigits as last two characters of string
// convert both to numbers
// if oneDigit is greater than or equal to 1, increment array[i] += array[i - 1]
// if twoDigit is between 10 and 26 inclusive, array[i] += array[i - 2]
// return array[s.length]

var numDecodings = function(s) {
  if (typeof s !== 'string') throw new TypeError('Invalid input: input type must by string');

  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    let oneDigit = Number(s.slice(i - 1, 1));
    let twoDigits = Number(s.slice(i - 2, 2));

    if (oneDigit >= 1) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};

