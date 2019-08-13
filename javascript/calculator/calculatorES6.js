
class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = null;

    this.addChangeHandler();
    this.addOpsHandler();
  }

  addChangeHandler() {
    let inputWrapper = document.querySelector('.number__input-wrapper');

    inputWrapper.addEventListener("change", e => {
      this.changeHandler(e);
    });
  }

  changeHandler(e) {
    switch(e.target.classList[0]) {
      case "input__1":
        this.num1 = parseInt(e.target.value);
        break;
      case "input__2":
        this.num2 = parseInt(e.target.value);
        break;
      default:
        return;   
    }
  }

  addOpsHandler() {
    const operationBtnContainer = document.querySelector(".operations__wrapper");

    operationBtnContainer.addEventListener("click", e => {
      this.calculate(e.target.classList[0]);
    });
  }

  calculate(type) {
    let res;
    switch(type) {
      case 'add':
        res = this.num1 + this.num2;
        break;
      case "subtract":
        res = this.num1 - this.num2;
        break;
      case "multiply":
        res = this.num1 * this.num2;
        break;
      case "divide":
        res = this.num1 / this.num2;
        break;
      default:
        return;
    }
    
    this.result = res;
    this.renderResult();
  }

  renderResult() {
    const outputDiv = document.querySelector(".output");
    outputDiv.textContent = this.result;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let calculator = new Calculator();
})


// edge case input
// shared event handlers
// innerText rather than 