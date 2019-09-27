import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 1
    }
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  updateTime() {    
    this.setState((prevState, props) => {
      return {
        time: prevState.time * props.increment
      };
    })
  }
  
  render() {
    return (
      <div>
        <p>The current time is {this.state.time}</p>
        <p>Other slice of state: {this.state.other}</p>
      </div>
    )
  }
}

export default Clock;
