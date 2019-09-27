import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
// import Toggle from './Toggle';
// import Greeting from './Greeting';
// import Mailbox from './Mailbox';
import Page from './Page';


class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Clock increment={5}/> */}
        <Page />
      </div>
    );
  }
}

export default App;
