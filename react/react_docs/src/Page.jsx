import React, { Component } from 'react'
import Warning from './Warning';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: false }
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.toggleWarning();
    }, 5000);
  }
  
  toggleWarning() {
    this.setState((state, props) => ({ warning: !state.warning }))
  }

  render() {
    if (!this.state.warning) {
      return null;
    } 

    return (
      <div>
        <button onClick={this.toggleWarning}>toggle warning</button>
        <Warning warning={this.state.warning} />
      </div>
    )
  }
}

export default Page;
