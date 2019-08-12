
class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = null;

    this.addChangeHandler();
    this.addOpsHandler();
  }

  addChangeHandler() {
    let inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach(input => {
      input.addEventListener("change", (e) => {
        this.changeHandler(e);
      });
    });
  }

  changeHandler(e) {
    if (e.target.classList[0] === "input__1") {
      this.num1 = parseInt(e.target.value);
    } else if (e.target.classList[0] === "input__2") {
      this.num2 = parseInt(e.target.value);
    }
  }

  addOpsHandler() {
    const operationButtons = document.querySelectorAll(
      ".operations__wrapper button"
    );

    operationButtons.forEach(button => {
      button.addEventListener("click", e => this.calculate(e.target.classList[0]));
    });
  }

  calculate(type) {
    let res;
    if (type === "add") {
      res = this.num1 + this.num2;
    } else if (type === "subtract") {
      res = this.num1 - this.num2;
    } else if (type === "multiply") {
      res = this.num1 * this.num2;
    } else if (type === "divide") {
      res = this.num1 / this.num2;
    }
    this.result = res;
    this.renderResult();
  }

  renderResult() {
    const outputDiv = document.querySelector(".output");
    outputDiv.innerHTML = this.result;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let calculator = new Calculator();
})
