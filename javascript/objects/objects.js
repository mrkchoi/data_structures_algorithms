// Given the following: 
var endorsements = [ 
  { skill: 'css', user: 'Bill' }, 
  { skill: 'javascript', user: 'Chad' }, 
  { skill: 'javascript', user: 'Bill' }, 
  { skill: 'css', user: 'Sue' }, 
  { skill: 'javascript', user: 'Sue' }, 
  { skill: 'html', user: 'Sue' } 
];

// Result // [ 
  // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 }, 
  // { skill: 'css', user: ['Sue', 'Bill'], count: 2 }, 
  // { skill: 'html', user: ['Sue'], count: 1 } 
// ]; 

// iterate through each el
// for each, check if exists in obj
// if does not exist,
// add to object as object value under skill key
// update users arr + count
// if exists,
// update users arr + count
// at end, grab all values of object and put into return array

getSkills = (endorsements) => { 
  // let allSkills = {};

  // endorsements.forEach(endorsement => {
  //   if (!allSkills[endorsement.skill]) {
  //     allSkills[endorsement.skill] = {
  //       skill: endorsement,
  //       user: [],
  //       count: 0
  //     }
  //   }
  //   allSkills[endorsement.skill].user.push(endorsement.user);
  //   allSkills[endorsement.skill].count += 1;
  // });

  // return Object.values(allSkills);
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





let obj = {
  shoes: [
    {
      brand: 'adidas', 
      size: 10
    }, 
    {
      brand: 'nike', 
      size: 4
    }
  ]
}

// return an array of all the shoe brands

function getBrands(obj) {
  let output = [];

  obj.shoes.forEach(item => {
    output.push(item.brand);
  })

  return output;
}