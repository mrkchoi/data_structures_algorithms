function throttle(func, timeLimit) {
  // let lastFunc;
  // let lastRan;
  let queue = [];
  return function() {    
    let lastRan = queue.shift();
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      // clearTimeout(lastFunc);
      // let lastFunc = setTimeout(function() {
      //   if ((Date.now() - lastRan) >= timeLimit) {
      //     func.apply(context, args);
      //     lastRan = Date.now();
      //   }
      // }, timeLimit - (Date.now() - lastRan));
      if ((Date.now() - lastRan) >= timeLimit) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        setTimeout(() => {
          queue.push(Date.now());
        }, timeLimit)
      }
    }
  }
}

let colorChange = throttle(function() {  
  let colors = ['orange', 'red', 'blue', 'green', 'yellow'];
  let btn = document.getElementsByClassName('throttle')
  let num = Math.floor((10 * (Math.random(0))) % colors.length)
  btn[0].style.backgroundColor = `${colors[num]}`
}, 2000)
