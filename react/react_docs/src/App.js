import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Clock from './Clock';
// import Toggle from './Toggle';
// import Greeting from './Greeting';
// import Mailbox from './Mailbox';
// import Page from './Page';
// import Number from './Number';
// import Form from './Form';
import Calculator from './Calculator';


class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Clock increment={5}/> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
