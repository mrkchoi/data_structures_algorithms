import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: 'Sehjwan',
//   lastName: 'Park'
// }

// function formatGreeting(user) {
//   return <h1>Hello, {formatName(user)}!</h1>;
// }

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   `Hello, ${formatName(user)}!`
// );

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
