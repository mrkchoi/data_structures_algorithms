// **THIS PROBLEM WILL NOT SHOW UP ON A REAL ASSESSMENT**
// If you are a non-native English speaker and find it difficult to understand this
// problem do not spend too much time on it and focus on other problems instead.

// Write a function `pigLatinify(sentence)` which translates a sentence into pig latin. 
// Rules for pig latin:
// In the English language, vowels are the following letters: ['a', 'e', 'i', 'o', 'u'] 
// Consonants are all other letters.
//  1. If the word begins with a vowel, simply append `ay` onto the end.
//      ex. 'apple' => 'appleay'
//  2. If the word begins with a consonant, move the starting consonants to the
//  end of the word and then append `ay`
//      ex1. 'pearl' => 'earlpay'
//      ex2. `school` => `oolschay`
//  3. Treat `qu` at the start of a word as a singular consonant.
//      ex1. `queen` => `eenquay`
//      ex2. `square` => `aresquay`
function pigLatinify(sentence) {
  const words = sentence.split(' ');
  const translateWord = (word) => {
    vowels = 'aeiou'.split('');
    if (vowels.indexOf(word[0]) != -1) {
      return `${word}ay`;
    } else {
      let phonemeEnd = 0;
      while(!(vowels.indexOf(word[phonemeEnd]) != -1)) {
        phonemeEnd += 1;
      }

      if (word[phonemeEnd - 1] === 'q') phonemeEnd += 1;
      return `${word.slice(phonemeEnd)}${word.slice(0, phonemeEnd)}ay`;
    }
  };

  return words.map( word => translateWord(word) ).join(' ');
}
