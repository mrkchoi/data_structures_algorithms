/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // if t is within s, we can return t
  if (s.includes(t)) return t;

  // create a lookup for letters and their counts in t
  const lookupObj = {};
  for (let i = 0; i < t.length; i++) {
    if (lookupObj[t[i]] !== undefined) lookupObj[t[i]]++;
    else lookupObj[t[i]] = 1;
  }

  // create a left and right pointer
  let right = 0;
  let left = 0;
  // and a counter to see if we've all characters
  let counter = t.length; // will be at 0 when we have all the chars
  // create minlength and minstring variables
  let minLength = Infinity;
  let minString = "";
  // while right is within the string
  while (s[right]) {
    // grab the right character
    let rightChar = s[right];
    // if the right pointer hits a char in the obj
    if (lookupObj[rightChar] !== undefined) {
      // decrease it's count
      lookupObj[rightChar]--;
      // if that char count is at 0 or greater, we needed it, so decrease counter
      if (lookupObj[rightChar] >= 0) counter--;
    }
    // if counter is at 0, we have all the chars
    while (counter === 0) {
      // check for smallest string
      if (right - left + 1 < minLength) {
        minString = s.slice(left, right + 1);
        minLength = right - left + 1;
      }
      // grab the left character
      let leftChar = s[left];
      // if we hit one of our chars
      if (lookupObj[leftChar] !== undefined) {
        // add one to the lookup
        lookupObj[leftChar]++;
        // if we're at 1, we no longer have the chars needed so increase counter
        if (lookupObj[leftChar] === 1) counter++;
      }
      // increase left pointer
      left++;
    }
    // increase right pointer
    right++;
  }
  return minString;
};









// round #1

function minWindow(s, t) {
  // if t is within s, return t
  if (s.includes(t)) return t;

  let lookupObj = {};
  for (let i = 0; i < t.length; i++) {
    if (lookupObj[t[i]] === undefined) {
      lookupObj[t[i]] = 1;
    } else {
      lookupObj[t[i]] += 1;
    }
  }

  let left = 0;
  let right = 0;
  let counter = t.length;
  let minLength = Infinity;
  let minString = '';

  while (s[right]) {
    let rightChar = s[right];

    if (lookupObj[rightChar] !== undefined) {
      lookupObj[rightChar] -= 1;
      if (lookupObj[rightChar] >= 0) counter -= 1;
    }

    while (counter === 0) {
      if (right - left + 1 < minLength) {
        minString = s.slice(left, right + 1);
        minLength = right - left + 1;
      }

      let leftChar = s[left];

      if (lookupObj[leftChar] !== undefined) {
        lookupObj[leftChar] += 1;
        if (lookupObj[leftChar] === 1) counter += 1;
      }
      left += 1;
    }

    right += 1;
  }
}






// round #2

// error check: empty string, t.length > s.length
// check if s.includes(t), if true, return t

// create hashmap of all characters in t w/ counts as values
// init left, right = 0
// init count = t.length
// init minLength = Infinity
// init minString = ''

// while (s[right]),
// check rightChar,
// if exists in hashmap, decrement hashmap[rightChar]
// if overall count is >= 0, then this was a necessary character that we need in order to match, so we can successfully decrement our counter by 1
// if counter === 0 (this means that we have found an exact substring match)
// check length of current matching substring,
// if the current substring length < minLength, 
// update minLength && minString
// check left character for inclusion in hashmap,
// if exists,
// increment hashmap[leftChar] by 1 (this means that we are going to move this pointer forward, so we will have to increment our count of characters needed)
  // we decrement everytime we find a proper match (in the hashmap)
// if the value of hashmap[leftChar] === 1,
// this means that the leftChar is necessary in order to maintain a proper matching substring, so we should increment our counter by 1
// then, we increment our left pointer
// in either case, we should increment our right pointer (this keeps the checks going regardless of whether we found an exact match or not. The left is placed within the while (counter === 0) check so that we can continue to increment our left pointer until we find a string that does not match anymore. placing the right pointer increment outside of this ensures that we continue to iterate after an initial match is found.)
// once the right pointer has been increased past the bounds of the original input string, we should break out of the outer while loop and return the final result string


function minWindow(s, t) {
  if (s.length < t.length) return '';
  if (typeof s !== 'string' || typeof t !== 'string') throw new TypeError('Invalid input: input type must be string');

  let map = {};
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 1;
    } else {
      map[t[i]] += 1;
    }
  }

  let left = 0;
  let right = 0;
  let counter = t.length;
  let minLength = Infinity;
  let minString = '';

  while (s[right]) {
    let rightChar = s[right];

    if (map[rightChar] !== undefined) {
      map[rightChar] -= 1;
      if (map[rightChar] >= 0) counter -= 1;
    }

    while (counter === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minString = s.slice(left, right + 1);
      }

      let leftChar = s[left];

      if (map[leftChar] !== undefined) {
        map[leftChar] += 1;
        if (map[leftChar] === 1) counter += 1;
      }

      left += 1;
    }

    right += 1;
  }

  return minString;
}