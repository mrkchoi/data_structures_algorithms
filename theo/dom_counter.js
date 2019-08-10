// step 1) get document and write function to hold a variable - counter
// step 2) write a up and down button 
// step 3) write their onclicks to increment/decrement the counter
// step 4) display counter and buttons on DOM 

document.addEventListener('DOMContentLoaded', () => {
  // new Counter();
  let btn1 = document.createElement('button');
  btn1.innerHTML = 'hello'
  btn1.className = 'test'
  let btn2 = document.createElement('button');
  btn2.innerHTML = 'hello'
  btn2.className = 'test'
  let body = document.getElementsByTagName('BODY')[0];
  body.appendChild(btn1)
  console.log(btn1.className === btn2.className);
})

class Counter {
  constructor() {
    this.counter = 0;
    this.upBtn = this.createBtn('up');
    this.downBtn = this.createBtn('down');
    this.upBtn.onclick = this.increment.bind(this);
    this.downBtn.onclick = this.decrement.bind(this);
    this.draw();
  }

  update() {
    let cntr = document.getElementById('cntr');
    cntr.innerHTML = this.counter;
  }
  
  increment() {
    this.counter += 1;
    this.update();
  }

  decrement() {
    this.counter -= 1;
    this.update();
  }

  draw() {
    let cntr = document.createElement('H1');
    cntr.id = 'cntr';
    cntr.innerHTML = this.counter;
    document.getElementsByTagName('BODY')[0].appendChild(cntr);
  }

  createBtn(str) {
    let btn = document.createElement('BUTTON');
    btn.innerHTML = str;
    let body = document.getElementsByTagName('BODY')[0];
    body.appendChild(btn);
    return btn;
  }
}