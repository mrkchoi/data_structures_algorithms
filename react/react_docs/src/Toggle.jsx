import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      count: 0
    }

    this.toggleButton = this.toggleButton.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  toggleButton() {
    this.setState((state, props) => ({ toggle: !state.toggle }));
  }
  
  updateCount(id, e) {
    console.log(e.target);
    this.setState((state, props) => ({ count: state.count + id }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}>toggle me</button>
        <p>I am toggled: {this.state.toggle ? 'ON' : 'OFF'}</p>

        <button onClick={this.updateCount.bind(this, 5)}>count up</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Toggle
