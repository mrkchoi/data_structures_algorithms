let user = {
  name: "SeHwan",
  age: 30,
  address: {
    home: {
      street: "123 street",
      city: "San Francisco",
      state: "California"
    },
    work: {
      street: "825 Battery",
      city: "San Francisco",
      state: "California"
    }
  }
};

function flattenObj(obj, objName) {
  let newObj = {};

  function _flattenObj(obj, objName) {
    for (let key in obj) {
      let newKey = `${objName}_${key}`;

      if (
        obj[key] instanceof Object &&
        !Array.isArray(obj[key]) &&
        typeof obj[key] !== "function"
      ) {
        // if object
        _flattenObj(obj[key], newKey);
      } else if (Array.isArray(obj[key])) {
        // if array
      } else if (typeof obj[key] === "function") {
        // if function
      } else {
        // if primitive
        newObj[newKey] = obj[key];
      }
    }
  }

  _flattenObj(obj, objName);

  return newObj;
}


flattenObj(user, "user");

let user = {};

function flatten(obj) {
  console.log(`${obj}`);
}
