

// write a function to deeply compare two objects in javascript
// return a boolean


let obj1 = {
  users: [1,2,3],
  skills: [10,9,8],
  getName: (id) => {
    return this.users.indexOf(id);
  },
  moreSkills: {
    moreSkill: ['moar', 'even moar']
  },
  member: true
}

let obj2 = {
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

console.log(_.isEqual(obj1, obj2));

// obj1 === obj2 => false
// they are pointing to different objects in memory

// if we want to compare equality between objects, then we will need to check:
// all of the keys of the object are the same
// all of the values are the same
// if a function, convert to string and compare
// if a primitive, compare directly
// if an array, compare directly
// if a nested object, recursively check all levels for a match
// if all are a match, return true
// if any are not a match, return false

function compareObjects(obj1, obj2, testPrototypes = false) {
  // initial check for equality
  if (obj1 === obj2) return true;

  // if both objects are functions, convert to string and compare
  if (typeof obj1 === 'function' && typeof obj2 === 'function') {
    return obj1.toString() === obj2.toString();
  }

  // if both objects are date objects, call getTime() and compare
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  // if the two object prototypes are not the same, or if one of the arguments is not an object, return false
  if (
    Object.prototype.toString.call(obj1) !== 
    Object.prototype.toString.call(obj2) || typeof obj1 !== 'object'
  ) {
    return false;
  }

  // check whether we shoudl check if prototypes are equal.
  // if we should check, get the prototypes and compare the prototype objects recursively, with testPrototypes = true,
  // else , set prototypesAreEqual to true
  const prototypesAreEqual = testPrototypes ? compareObjects(Object.getPrototypeOf(obj1), Object.getPrototypeOf(obj2), true) : true;

  // get all of the property names for the objects
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  // check the properties length, check prototypes, check that every property is recursively a match, because the properties are objects as well
  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => compareObjects(obj1[prop], obj2[prop]))
  );
}
