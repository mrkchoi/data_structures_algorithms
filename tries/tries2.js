/*
 * Complete the 'spellingBeeSolutions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordlist
 *  2. STRING_ARRAY puzzles
 */

// create trie DS w/ insert + getWord methods
// iterate through each word in wordlist and generate trie
// iterate through each puzzle,
// for each puzzle, generate a hashMap of characters
// for DFS through trie, checking that the children of the node exists in hashMap
// if exists in hashMap, add the child node to stack
// check if this.end && this.getWord().includes(keyChar)
// if both true, increment localCount
// at the end of each puzzle, push localCount into globalCount array
// return the completed globalCount array of integers

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
    // set node to root
    let node = this.root;
    // for each char of word, 
    for (let i = 0; i < word.length; i++) {
      // if does not exist in node.children, add to children
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
      }
      // set parent of new node to node
      node.children[word[i]].parent = node;
      // update node to node.children[char]
      node = node.children[word[i]];
      // on last char, set this.end = true

      if (i === word.length - 1) {
        node.end = true;
      }
    }
    return node.getWord();
  }

  find(prefix) {
    // find all words that have a given prefix
    // set node to this.root
    let node = this.root;
    let output = [];
    // set node to node.children[prefix[i]]
    for (let i = 0; i < prefix.length; i++) {
      if (!node.children[prefix[i]]) {
        return false;
      }
      node = node.children[prefix[i]];
    }
    // run findAllWords helper function on node, output arr
    this.findAllWords(node, output);
    // return completed output array
    return output;
  }

  findAllWords(node, arr) {
    if (node.end) {
      arr.push(node.getWord());
    }

    Object.keys(node.children).forEach(child => {
      this.findAllWords(node.children[child], arr);
    });
  }
}


function spellingBeeSolutions(wordlist, puzzles) {
    // set globalCounts
    let globalCounts = [];
    // init trie
    let trie = new Trie();
    // add all words in wordlist to trie
    wordlist.forEach(word => {
      trie.insert(word);
    });
//     debugger
    // console.log(trie);
    // for each puzzle, run DFS on trie & update globalCounts
    puzzles.forEach(puzzle => {
      dfs(puzzle, trie, globalCounts);
    });

    return globalCounts;
}

// dfs implementation
function dfs(puzzle, trie, globalCounts) {
  // create hashMap of puzzle chars
  let hashMap = {};
  let keyChar = puzzle[0];
  let currentCount = 0;

  for (let i = 0; i < puzzle.length; i++) {
    hashMap[puzzle[i]] = true;
  }
  // console.log(hashMap);
  // init localCount = 0
  // init keyChar = puzzle[0]

  let stack = [trie.root];
  // use stack, dfs through trie
  while (stack.length) {
    let node = stack.pop();

    if (node.children === {}) return;
    
    // if children exist, filter the children that exist and add to stack
    Object.keys(node.children).forEach(child => {
      // console.log(hashMap[child]);
      if (hashMap[node.children[child].key]) {
        stack.push(node.children[child]);
      }
    })
      // if this.end() && this.getWord().includes(keyChar), increment localCount by 1
      if (node.end && node.getWord().includes(keyChar)) {
        currentCount += 1;
      }
  }
  // after dfs through trie is complete, push localCount to globalCounts
  globalCounts.push(currentCount);
}







spellingBeeSolutions(['apple', 'pleas', 'please'], ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelpxy', 'xaelpsy'])
