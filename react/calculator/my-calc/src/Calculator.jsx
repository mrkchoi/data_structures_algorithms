import React, { Component } from 'react'

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      result: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleCalcBtn = this.handleCalcBtn.bind(this);
  }

  handleInput(inputType) {
    return (e) => {
      switch(inputType) {
        case "input1":
          this.setState({ num1: parseInt(e.target.value)})
          break;
        case "input2":
          this.setState({ num2: parseInt(e.target.value)})
          break;
        default:
          break;
      }
    }
  }

  handleCalcBtn(calcType) {
    let result;
    let { num1, num2 } = this.state;

    switch (calcType) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      default:
        break;
    }

    this.setState({ result })
  }

  render() {
    return (
      <div>
        <div className="number__input-wrapper">
          <input 
            type="number" 
            className="input__1" 
            onChange={this.handleInput("input1")}
            value={this.state.num1}/>
          <input 
            type="number" 
            className="input__2" 
            onChange={this.handleInput("input2")}
            value={this.state.num2}/>
        </div>
        <div className="operations__wrapper">
          <button className="add" onClick={() => this.handleCalcBtn("add")}>+</button>
          <button className="subtract" onClick={() => this.handleCalcBtn("subtract")}>-</button>
          <button className="multiply" onClick={() => this.handleCalcBtn("multiply")}>*</button>
          <button className="divide" onClick={() => this.handleCalcBtn("divide")}>/</button>
        </div>
        <h2>output</h2>
        <div className="output">
          {this.state.result}
        </div>
      </div>
    )
  }
}

export default Calculator; 
