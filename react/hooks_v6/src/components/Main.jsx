import React from 'react';
import NavBar from './NavBar';
import Results from './Results';
import Favorites from './Favorites';

function Main() {
  return (
    <div className="main__container">
      <NavBar />
      <div className="content-wrapper ui container grid">
        <Results />
        <Favorites />
      </div>
    </div>
  )
}

export default Main
