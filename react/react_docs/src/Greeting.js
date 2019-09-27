import React, { Component } from 'react'

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
   this.setState({loggedIn: true});
  }
  
  handleLogout() {
    this.setState({loggedIn: false});
  }

  render() {
    let button = (
      <button
        onClick={this.state.loggedIn ? 
          this.handleLogout : 
          this.handleLogin}>
        {this.state.loggedIn ? "Logout" : "Login"}
      </button>
    );

    return (
      <div>
        <p>User is currently: {this.state.loggedIn ? 'Logged In' : 'Logged Out'}</p>
        {button}
      </div>
    );
  }
}

export default Greeting;