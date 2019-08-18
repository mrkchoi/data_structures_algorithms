'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



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
}

// return a count of all words that exist in dictionary for an array of puzzles
// output should be an array of integers, representing the counts of
// matched words for each puzzle

function spellingBeeSolutions(wordList, puzzles) {
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
    if (node.children === {}) return;
    // check if any children exist in hashMap.
    // if children do exist, filter and add the children to stack
    Object.keys(node.children).forEach(child => {
      if (hashMap[node.children[child].key]) {
        stack.push(node.children[child]);
      }
    });

    if (node.end && node.getWord().includes(keyChar)) {
      currentCount += 1;
    }
    // if node.end === true && node.getWord() contains keyChar increment currentCount
    // continue until no more children to check
  }

  globalCounts.push(currentCount);
  // push currentCount to globalCounts
}


















function main() {