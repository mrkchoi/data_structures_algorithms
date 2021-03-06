



// select input on DOM
// set throttle HOF invoked with callback and delay to variable
// set variable to event listener
// define function (callback)
// define debounce function


const input = document.querySelector("#input");

const debouncedHandleClick = debounce(handleClick, 500);

input.addEventListener('click', debouncedHandleClick);

let counter = 0;
function handleClick() {
  console.log('clicked!', counter++);
}

// only execute func after a given delay. with multiple clicks, the function should only execute after the last click

function debounce(func, delay) {
  let lastRan;
  return function() {
    let context = this;
    let args = Array.from(arguments);

    clearTimeout(lastRan);
    lastRan = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}






















































// const input = document.querySelector('#input');

// let debouncedGetData = debounce(getData, 300);

// input.addEventListener('keyup', debouncedGetData);

// let counter = 0;
// function getData() {
//   console.log('making api call', counter++);
// }

// function debounce(func, delay) {
//   let timer;

//   return function() {
//     let context = this;
//     let args = arguments;

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   }
// }








// add event listener to DOM
// write debounce function that will take in a function + delay (in milliseconds)
// debounce will init a variable for the setTimeout
// it will return a function,
// to preserve context and any arguments, we will set context + arguments
// clear timer, if any
// set timer equal to new setTimeout
// inside of setTimeout, execute function with given context + args
// delay is passed into setTimeout
// execute the debounced function, returning the function we will use to set delay
// set this returned function as callback to eventHandler



// const input = document.querySelector('#input');

// const debouncedGetData = debounce(getData, 300);
// input.addEventListener('keyup', debouncedGetData);

// let counter = 0;
// function getData() {
//   console.log("getting data", counter++);
// }

// function debounce(func, delay) {
//   // init timer
//   let timer;
//   return function() {
//     // context will become input
//     let context = this;
//     // args will be any arguments passed to function from event handler (i.e. event object)
//     let args = arguments;

//     // clear timeout if any
//     clearTimeout(timer);
//     // set new setTimeout
//     timer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   }
// }