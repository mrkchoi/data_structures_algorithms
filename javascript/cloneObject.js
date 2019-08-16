// to clone an object in JavaScript
let obj = {a:1,b:2};
let newObj = {...obj};

// this will create a shallow copy of the object, with any nested values (functions, arrays, objects) not copied, but rather pointing to the same references in memory

// another shallow clone
Object.assign({}, obj);

// or

// another shallow clone
// grab all of the keys of the object as an array, and reduce the values
Object.keys(obj).reduce((acc, key) => {
  return acc[key] = obj[key];
}, {});

// another shallow clone
// convert the object into a json object (stringified),
// then, parse the json back into a JavaScript object
// this method is slow and not performant
JSON.parse(JSON.stringify(obj));


// an efficient way to deeply clone an object is to use the underscores library

_.cloneDeep(obj)

// or in react

import { merge } from 'lodash';
merge({}, obj);



