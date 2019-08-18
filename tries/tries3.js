// given a wordlist and an array of puzzle strings,
// return an array of all possible word counts for each puzzle


// create a trie with all of the words in the wordlist
// trieNode class w/ getWord()
// trie class with insert()

// search()
// populate trie with all words from wordlist
// set globalCount array
// iterate through puzzles and for each puzzle, dfs through trie
// for every valid word in the trie that only contains letters from the puzzle
// && contains the keyChar (the first char of the puzzle), increment a localCount
// after completing DFS through the trie for all possible valid words,
// push the localCount to the globalCount
// once all puzzles have been completed, return the globalCount array

class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  getWord() {
    // init output array
    // init node as `this`
    // continue unshifting node.key while node.parent
    // return output.join(')
    let output = [];
    let node = this;

    while (node.parent) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join('');
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  // insert
  insert(word) {
    // init node as this.root
    let node = this.root;
    // iterate through each char of word
    for (let i = 0; i < word.length; i++) {
      // if !node.children[word[i]], add node instance as child
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        // set child node's parent to node
        node.children[word[i]].parent = node;
      }
      // update node pointer to child
      node = node.children[word[i]];

      // if node is last char of word, set end to true
      if (i === word.length - 1) {
        node.end = true;
      }
    }
    // return getWord()
    return node.getWord();
  }
}

function search(wordlist, puzzles) {
  // init trie
  let trie = new Trie();
  let globalCount = [];
  // add all words to trie
  wordlist.forEach(word => {
    trie.insert(word);
  })
  console.log(trie);
  // iterate through puzzles
  puzzles.forEach(puzzle => {
    // dfs through trie and keep count for each valid word
    // add each valid word count to globalCount
    dfs(puzzle, trie, globalCount);
  })
  // return globalCount
  return globalCount;
}

function dfs(puzzle, trie, arr) {
  // init localCount
  // create hashMap from puzzle
  // init keyChar from first char of puzzle
  let localCount = 0;
  let hashMap = {};
  let keyChar = puzzle[0];

  for (let i = 0; i < puzzle.length; i++) {
    hashMap[puzzle[i]] = true;
  }
  
  // use stack to iterate through nodes of trie
  let stack = [trie.root];

  while (stack.length) {
    let node = stack.pop();
    // if no node.children, return
    if (node.children === {}) return;
    // find children that exist in hashMap
    Object.keys(node.children).forEach(childKey => {
      if (hashMap[childKey]) {
        // for each valid child, run dfs on each child
        stack.push(node.children[childKey]);
      }
    });

    // for each node, check if this.end && this.getWord().includes(keyChar)
    if (node.end && node.getWord().includes(keyChar)) {
      localCount += 1;
    }
    // if true, increment localCount
  }
  // after completing dfs, push localCount to arr
  arr.push(localCount);
}

search(
  ["ap","apple", "pleas", "please"],
  ["aelpsxy"]
);

// search(
//   ["ap","apple", "pleas", "please"],
//   ["aelwxyz", "aelpxyz", "aelpsxy", "saelpxy", "xaelpsy"]
// );