// implement jQuery `$()` method using pure JavaScript
// implement jQuery `$.attr()`. Implement both getter/setter methods
// implement jQuery `.css()` method

// as element selector
// single/multiple elements
// can be give a class, id, or element string e.g. 'div#foo', 'div.foo'
// to create elements
// given a string of a new html element
// e.g. $(`<div id="test">newDiv</div>`)
// tags can also be given as $(`<div>`)
// as a wrapper similar to DOMContentLoaded
// e.g. $(function() { // document is ready.. });
window.$$;

// let nodeCollection = new DOMNodeCollection();


function $$(arg) {
  let selection;
  if (typeof arg === "function") {
    let queue = [];
    queue.push(arg);
    document.addEventListener('DOMContentLoaded',
      queue.forEach(fn => {
        fn();
      })
    );
    return;
  }

  if (typeof arg === 'string') {
    selection = document.querySelectorAll(`${arg}`);
  } else if (arg instanceof HTMLElement) {
    selection = [...arg];
  }
  return new DOMNodeCollection(selection);
}




