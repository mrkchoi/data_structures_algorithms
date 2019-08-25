




// add event listener on DOM for percentage from bottom of viewport
// wrap callback in throttled function
// inside of function, if meets or exceeds threshold,
// add more elements to the dom

const parent = document.querySelector('.parent');

const throttledHandleScroll = throttle(handleScroll, 2000);

document.addEventListener('scroll', throttledHandleScroll);

let counter = 5;

function handleScroll(e) {
  // calculate if scroll position is past threshold
  let windowInnerHeight = document.body.clientHeight;
  let scrollY = window.scrollY;
  let windowHeight = window.innerHeight;
  let scrolledAmt = scrollY + windowHeight;

  let percentageScrolled = (scrolledAmt / windowInnerHeight) * 100;

  if (percentageScrolled >= 90) {
    console.log('scrolled past 90%')
    // append new elements to dom

    let targetCount = counter + 4;
    let classNum = 1;
    while (counter < targetCount) {
      let div = document.createElement('div');
      div.classList.add(`item`);
      div.classList.add(`item${classNum}`);
      div.textContent = `${counter}`;
      parent.appendChild(div);
      counter += 1;
      classNum += 1;
    }
  }
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
      }, (limit - (Date.now() - lastRan)));
    }
  }
}

