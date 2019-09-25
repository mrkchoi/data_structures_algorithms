// LC 394. Decode String

/**
 * @param {string} s
 * @return {string}
*/

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

// error check: empty string, empty string inside brackets

// init stack
// init output string
// iterate through each char of input string
// init curString = ''
// each time, add character into stack
// if character is === ']', 
// begin popping of until '[' && adding characters to beginning of curString
// once we reach '[', build up initial string, pop off one more character
// this character will be the integer
// multiply the string by the integer, and push into stack
// continue pushing remaining character into stack, popping off and building up multiplied strings if necessary
// once we reach the end of the string, join stack characters together
// return joined string

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

var decodeString = function(s) {
  if (typeof s !== 'string') throw new TypeError('Invalid input: input type must be string');
  if (s.length < 4) return s;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];
    let curString = '';
    let curMultipliedString = '';
    if (curChar === ']') {
      while (stack[stack.length - 1] !== '[') {
        curString = stack.pop() + curString;
      }
      stack.pop();
      let multiplier = Number(stack.pop());
      for (let i = 0; i < multiplier; i++) {
        curMultipliedString += curString;
      }
      stack.push(curMultipliedString);

    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};

