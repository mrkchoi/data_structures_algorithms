/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// given a jumbled dictionary order, return a boolean indicating whether a series of words (array) are sorted in lexicographical order

// error check: non-array

// init map of characters w/ indices
// iterate through each word in words array
// for each word, iterate through each character index
// check first vs second word,
// if at any point, the first word index is greater than the first, return false
// if the first word index is less than the second, break and continue to next pair of words,
// if we get through all of the words without returning false,
// return true

function isAlienSorted(words, order) {
  if (!Array.isArray(words))
    throw new TypeError("Invalid input: words must be an array");
  if (order.length !== 26) throw new Error("Invalid dictionary length");

  let map = {};
  order.split("").forEach((char, idx) => (map[char] = idx));

  for (let i = 1; i < words.length; i++) {
    let firstWord = words[i - 1];
    let secondWord = words[i];

    let longerWord =
      firstWord.length > secondWord.length ? firstWord : secondWord;

    for (let j = 0; j < longerWord.length; j++) {
      let idx1 = map[firstWord[j]] || -1;
      let idx2 = map[secondWord[j]] || -1;

      if (idx1 === idx2) {
        continue;
      }
      if (idx1 < idx2) {
        break;
      } else if (idx1 > idx2) {
        return false;
      }
    }
  }
  return true;
}
