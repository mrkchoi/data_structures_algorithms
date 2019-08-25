

class DOMNodeCollection {
  constructor(elementsArr) {
    this.elements = elementsArr;
  }

  html(string) {
    if (string) {
      this.elements.forEach(element => {
        element.innerHTML = string;
      })
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.elements.forEach(el => {
      el.innerHTML = '';
    })
  }

  // appends outerHTML of each el in argument to innerHTML of each element in DOMNodeCollection (elements)
  append(selector) {
    // debugger
    if (selector instanceof DOMNodeCollection) {
      // debugger
      selector.elements.forEach(element1 => {
        this.elements.forEach(element2 => {
          element2.appendChild(element1);
        })
      })
    }
  }

  attr(selector, value) {
    if (!value) {
      return this.elements[0].getAttribute(selector);
    }
    return this.elements[0].setAttribute(selector, value);
  }

  addClass(className) {
    this.elements.forEach(el => {
      el.classList.add(className);
    })
  }

  removeClass(className) {
    this.elements.forEach(el => {
      el.classList.remove(className);
    })
  }

  children() {
    let childrenCollection = [];
    this.elements.forEach(el => {
      // debugger
      childrenCollection = [...childrenCollection, ...el.children];
    })
    return new DOMNodeCollection(childrenCollection);
  } 

  parent() {
    let parentCollection = [];

    this.elements.forEach(el => {
      parentCollection = [...parentCollection, el.parentElement];
    })

    return new DOMNodeCollection(parentCollection);
  }

  find(selector) {
    let childCollection = [];

    this.elements.forEach(el => {
      let currentChildren = el.querySelectorAll(selector);
      childCollection = [...childCollection, ...currentChildren];
    })

    return new DOMNodeCollection(childCollection);
  }

  remove() {
    this.elements.forEach(el => {
      el.remove();
    })
  }

  on(event, cb) {
    this.elements.forEach(el => {
      el.addEventListener(event, cb);
      el.callback = cb;
    })
  }

  off(event) {
    this.elements.forEach(el => {
      el.removeEventListener(event, el.callback);
    })
  }
}