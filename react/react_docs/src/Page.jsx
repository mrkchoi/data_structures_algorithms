import React, { Component } from 'react'
import Warning from './Warning';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: false }
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  toggleWarning() {
    this.setState((state, props) => ({ warning: !state.warning }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleWarning}>toggle warning</button>
        <Warning warning={this.state.warning} />
      </div>
    )
  }
}

export default Page;
