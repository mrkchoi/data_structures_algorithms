

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



const input = document.querySelector('#input');

const debouncedGetData = debounce(getData, 300);
input.addEventListener('keyup', debouncedGetData);

let counter = 0;
function getData() {
  console.log("getting data", counter++);
}

function debounce(func, delay) {
  // init timer
  let timer;
  return function() {
    // context will become input
    let context = this;
    // args will be any arguments passed to function from event handler (i.e. event object)
    let args = arguments;

    // clear timeout if any
    clearTimeout(timer);
    // set new setTimeout
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}