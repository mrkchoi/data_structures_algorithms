// Given the following: 
var endorsements = [ 
  { skill: 'css', user: 'Bill' }, 
  { skill: 'javascript', user: 'Chad' }, 
  { skill: 'javascript', user: 'Bill' }, 
  { skill: 'css', user: 'Sue' }, 
  { skill: 'javascript', user: 'Sue' }, 
  { skill: 'html', user: 'Sue' } 
];

getSkills = (endorsements) => { 

  // Result // [ 
    // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 }, 
    // { skill: 'css', user: ['Sue', 'Bill'], count: 2 }, 
    // { skill: 'html', user: ['Sue'], count: 1 } 
    // ]; 
} 

// see this image: http://i.imgur.com/UIeB3n4.png

// init output arr
// init css, javascript, html objects

// iterate through endorsements
// for each el, key into skill, look for user

let skills = {
  javascript: {skill: 'javascript', user: [], count: 0},
  html: {skill: 'javascript', user: [], count: 0},
  css: {skill: 'javascript', user: [], count: 0}
};
