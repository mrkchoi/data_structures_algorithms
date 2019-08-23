


const input = document.querySelector('#button');

let throttledHandleClick = throttle(handleClick, 1000);

input.addEventListener('click', throttledHandleClick);

let counter = 1;
function handleClick() {
  console.log(`throttle executed`, counter++);
}

function throttle(func, limit) {

  let lastRan;
  let lastCall;
  return function() {
    let context = this;
    let args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastCall);
      lastCall = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}


































// // init throttle HOF with callback fn + limit
// const throttledHandleClick = throttle(getData, 1000);
// // setup event listener on input
// const submit = document.querySelector('#button');
// submit.addEventListener('click', throttledHandleClick);
// // write callback fn
// let counter = 1;
// function getData() {
//   console.log(`getting data`, counter++);
// }

// // write throttle function
// function throttle(func, limit) {
//   let lastRan;
//   let lastCall;

//   return function() {
//     let context = this;
//     let args = arguments;

//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastCall);
//       lastCall = setTimeout(() => {
//         // if limit has been reached, execute function and update lastRan
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     } 
//   }
// }