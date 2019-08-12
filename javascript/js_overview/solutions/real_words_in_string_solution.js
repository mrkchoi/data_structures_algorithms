// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

// Solution 1
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];

  dictionary.forEach((el) => {
    if (this.includes(el)) realWords.push(el);
  });
  return realWords.sort();
};

// Solution 2
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let word = this.slice(i, j+1);

      if (dictionary.indexOf(word) > -1) {
        if (realWords.indexOf(word) < 0) realWords.push(word);
      }
    }
  }

  return realWords.sort();
};
