function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
}

let adjustColor = debounce(function () {
  let colors = ['pink', 'black', 'purple', 'brown', 'white'];
  let btn = document.getElementsByClassName('debounce')
  let num = Math.floor((10 * (Math.random(0))) % colors.length)
  btn[0].style.backgroundColor = `${colors[num]}`
}, 2000)