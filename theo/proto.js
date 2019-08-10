// practicing with prototypal inheritance

// Ruby has a method .first which can be called on arrays and returns
// the first element in the array. JS does not, you have to index. 
// technically indexing is less lines but .first is easy. lets 
// make that work on js. 

// step 1) create an arr

let myArr = [1, 2, 3, 4, 5];

// step 2) see what .first returns 

// console.log(myArr.first)

// ^ undefined

// step 3) fix that problem 

Array.prototype.first = function() {
  let arr = this;
  return arr[0]
}

// console.log(myArr.first());

// step 4) OOOOOOH WAAAAT IT WOOOORKS

// another prototypal inheritance example 

function Car(name) {
  this.name = name;
}

Car.prototype.start = function() {
  // console.log(this.name + ' is starting, vroooom')
}

function Tesla(name) {
  Car.call(this, name);
}

Tesla.prototype = Object.create(Car.prototype);

let stella = new Car('stella');
let mick = new Tesla('mick');

// console.log(stella.start())
mick.start();


// goal, lets make an arr.last which returns the last el of an arr. 

Array.prototype.last = function() {
  let arr = this;
  return arr[arr.length - 1];
}

let test = [1, 4, 3, 2];
// console.log(test.last())


let obj = {
  0 : 'hello',
  4 : 'world',
  'this' : 'is odd'
}

Object.prototype.length = function() {
  let hash = this;
  let counter = 0;
  for (key in hash) {
    counter += 1;
  }
  return counter - 1;
  // why is this neccesary? 
}

// console.log(obj.length())
// console.log(obj['this'])


function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  return 'hello, my name is ' + this.name;
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);

let theo = new Person('Theo', 24);
console.log(theo.sayHello())
let tom = new Employee('Tom', 26, 'administrator')

console.log(tom.sayHello())
console.log(tom)