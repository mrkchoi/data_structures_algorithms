// implement a trie with the following methods:
// getWord
// insert(word)
// contains(word)
// find(prefix)
// findAllWords(node)

class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  getWord() {
    let node = this;
    let output = [];
    // assume that this node is the end of a word

    while (node.parent) {
      // add the key to an array
      output.unshift(node.key);
      // continue to traverse up the parent until parent.next === null
      node = node.parent;
    }

    return output.join("");
    // return the joined array
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  // insert(word)
  insert(word) {
    let node = this.root;

    // iterate through each char
    for (let i = 0; i < word.length; i++) {
      // check if char exists as child
      // if does not exist, create k/v inside children obj
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
      }
      // set child node parent to node
      node.children[word[i]].parent = node;
      // update node pointer to node.children[char]
      node = node.children[word[i]];
      // set this.end to the last node of the list
      if (i === word.length - 1) {
        node.end = true;
      }
    }
    // continue until all letters have been inserted

    // return the word
    return node.getWord();
  }

  // contains(word)
  contains(word) {
    // set node to root
    let node = this.root;
    // iterate through each char or string
    for (let i = 0; i < word.length; i++) {
      // check if char exists as child of node
      // if does not exist, return false
      if (!node.children[word[i]]) return false;
      // if does exist, move node pointer to child node at key
      node = node.children[word[i]];
    }
    // at end of iterations, check that node.end === true and return
    return node.end;
  }

  // find(prefix)
  // return array of all strings that are valid words, given a prefix
  find(prefix) {
    // set node to root
    let node = this.root;
    let output = [];
    // iterate through prefix
    for (let i = 0; i < prefix.length; i++) {
      // check that node.children[prefix[i]]
      // if does not exist, return false
      if (!node.children[prefix[i]]) return false;
      // if exists, set pointer to children[prefix[i]]
      node = node.children[prefix[i]];
    }
    // once complete, call findAllWords(node, output)
    this.findAllWords(node, output);

    return output;
  }

  // findAllWords(node, arr)
  // given a node, find all of the valid words contained with the trie
  findAllWords(node, arr) {
    // check if node.end === true
    // if true, getWord() and add to array
    if (node.end) arr.push(node.getWord());

    // recursively call FindAllWords for each of the children
    Object.keys(node.children).forEach(child => {
      this.findAllWords(node.children[child], arr);
    });

    return arr;
  }
}

// let t = new Trie();
// t.insert("apple");
// t.insert("apples");
// t.insert("apps");
// t.insert("app");
// t.insert("ape");
// t.insert("append");
// // t.contains('append');
// t.find("app");

// return a count of all words that exist in dictionary for an array of puzzles
// output should be an array of integers, representing the counts of
// matched words for each puzzle

function search(wordList, puzzles) {
  // instantiate new trie
  let trie = new Trie();
  // add all words in dictionary to trie
  wordList.forEach(word => {
    trie.insert(word);
  });

  // setup global count + current count
  let globalCounts = [];

  puzzles.forEach(puzzle => {
    dfs(puzzle, trie, globalCounts);
  });

  return globalCounts;
}

function dfs(puzzle, trie, globalCounts) {
  let hashMap = {};
  let keyChar = puzzle[0];
  let currentCount = 0;

  for (let i = 0; i < puzzle.length; i++) {
    hashMap[puzzle[i]] = true;
  }

  let stack = [trie.root];

  while (stack.length) {
    let node = stack.pop();
    // if node.key does not exist in trie, next
    // if does exist
    //     debugger;
    if (node.children === {}) return;
    // check if any children exist in hashMap.
    // if children do exist, filter and add the children to stack
    Object.keys(node.children).forEach(child => {
      if (hashMap[node.children[child].key]) {
        stack.push(node.children[child]);
      }
    });

    //     debugger
    if (node.end && node.getWord().includes(keyChar)) {
      currentCount += 1;
    }
    // if node.end === true && node.getWord() contains keyChar increment currentCount
    // continue until no more children to check
  }

  globalCounts.push(currentCount);
  // push currentCount to globalCounts
}

// apple = {
//   "a": true,
//   "p": true,
//   "l": true,
//   "e": true,
// }

// puzzle = 'axypezl'


search(
  ["APPLE", "PLEAS", "PLEASE"],
  ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPXY", "XAELPSY"]
);
