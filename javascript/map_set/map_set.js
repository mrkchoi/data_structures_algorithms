// ES6 Map

let obj = new Object([["d", 1], ["a", 2], ["b", 4], ["c", 3]]);

let obj = {};
obj["d"] = "hiii";
obj["a"] = "hello";
obj["b"] = "hiii";
obj["c"] = "hello";

let map = new Map([["d", 1], ["a", 2], ["b", 4], ["c", 3]]);

let map = new Map({
  a: 2,
  ac: 1,
  akk: 4
});

const fn = function() {
  console.log(this);
};

let map = new Map();
map.set("d", "hello");
map.set("a", "hello");
map.set("ac", "hello");
map.set("b", "hiii");
map.set(fn, "my key is a function");


for (let [k,v] in map) {

}


let objmerged = {...obj, ...obj};
Object.assign({}, obj1, obj2);

let map2 = new Map([['b',4], ['a', 2]]);
let map1 = new Map([['a',1]]);

let map3 = new Map([...map2, ...map1]);




// SET


let set = new Set([1,2,3,'a',4,5]);

let arr = [1,2,2,3,3,3,44,4,4,5,5,5,5,6,6,7,7,78,8,8,9,9,9];