import React, { Component } from 'react'

const scaleNames = {
  C: 'Celcius',
  F: 'Farenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let temperature = this.props.temp;
    let scale = this.props.scale;

    return (
      <form>
        <label>Enter a temperature in {scaleNames[scale]}:<br />
          <input 
            type="text" 
            name="temperature" 
            onChange={this.handleChange}
            value={temperature}
            ref={this.input} />
        </label>
        <br />
        <br />
      </form>        
    )
  }
}

export default TemperatureInput
