import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Clock increment={5}/> */}
        <Toggle />
      </div>
    );
  }
}

export default App;
