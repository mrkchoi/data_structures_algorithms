var longestPalindrome = function (s) {
  let arr = s.split('');
  let ans = '';
  for (let i = 0; i < arr.length; i++) {
    let first = i;
    while (arr[first - 1] === arr[i]) {
      first -= 1;
    }
    let last = i;
    while (arr[last + 1] === arr[i]) {
      last += 1;
    }
    while (arr[first] === arr[last]) {
      let test = arr.slice(first, last + 1).join('')
      if (test.length >= ans.length) {
        ans = test;
      }
      first -= 1;
      last += 1;
      if (first < 0 || last > arr.length) {
        break;
      }
    }
  }
  return ans;
};

let test = 'racacr'

console.log(longestPalindrome(test));


// ex: abax = aba

// theuabaj

// racecarmeow
// abbcx