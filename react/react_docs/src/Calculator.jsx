import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingTemp from './BoilingTemp';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'F'
    }

    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
  }

  handleCelciusChange(temp) {
    this.setState({scale: 'C', temperature: temp});
  }
  
  handleFarenheitChange(temp) {
    this.setState({scale: 'F', temperature: temp});
  }

  render() {
    let {scale, temperature} = this.state;
    let celcius = scale === 'F' ? toCelcius(temperature) : temperature;
    let farenheit = scale === 'C' ? toFarenheit(temperature) : temperature;

    return (
      <div>
        <TemperatureInput scale='C' onChange={this.handleCelciusChange} temp={celcius}/>
        <TemperatureInput scale='F' onChange={this.handleFarenheitChange} temp={farenheit}/>
        <br/>
        <br/>
        <BoilingTemp temp={parseInt(celcius)} scale={scale}/>
      </div>
    )
  }
}

function toCelcius(tempF) {
  if (tempF === '') return '';
  return (parseFloat(tempF) - 32) * 5 / 9;
}

function toFarenheit(tempC) {
  if (tempC === '') return '';
  return (parseFloat(tempC) * 9 / 5) + 32;
}

export default Calculator

