import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import SearchBar from './components/search_bar';
// import Results from './components/results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
