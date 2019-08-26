

// write a function to clone an object deeply

// iterate through top level keys
// if value is primitive, add k/v pair
// if value is function, 

let obj1 = {
  users: [1, 2, 3],
  skills: [10, 9, 8],
  getName: id => {
    return this.users.indexOf(id);
  },
  moreSkills: {
    moreSkill: ["moar", "even moar"]
  },
  member: true
};



// standard ways to copy an object in JavaScript

// use lodash / underscores cloneDeep
// Object.assign({}, oldObj) 
// {...oldObj}
// JSON.parse(JSON.stringify(oldObj))
  // problem is it will not copy functions or Infinity, or any property assigned to undefined (it will be ignored by JSON)
  // Date objects will be converted to string, and Set, Map will not convert properly



// write a function to copy an object in JavaScript


// helper function to check if an element is an object
// create target (new) obj
// iterate through keys, check that each key exists in original object
// if exists && isObject, set target[prop] = copyObject(src[prop])
// if exists && !isObject, set target[prop] = src[prop]
// return new object

function isObject(obj) {
  let type = typeof obj;
  // there are two main typeof strings for valid objects, 'function' and 'object
  // check if typeof is either function or object
  // if 'object', we should check that the object is not 'null'
  // typeof 'null' is also an object, but we can check with !!obj
  // !!null === false
  // !!obj === true
  return type === 'function' || type === 'object' && !!obj
}


function deepCopy(source) {
  let target = {};

  for (let prop in source) {
    if (source.hasOwnProperty(prop)) {
      if (isObject(source[prop]) && (typeof source[prop] !== 'function')) {
        target[prop] = deepCopy(source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

const fnTest = () => {
  console.log('this is a function');
}

const a = {
  a: fnTest,
  b: 2,
  c: 3
}

const b = deepCopy(a);

console.log(a)
console.log(b)