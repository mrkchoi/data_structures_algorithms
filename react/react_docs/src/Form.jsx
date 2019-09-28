import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      textarea: '',
      select: 'coconut'
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e, type) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value } , 
      () => console.log(this.state.username));
  }
  
  handleSubmit(e) {
    alert(`Submitted ::::: ${this.state.value}`);
    alert(`Submitted ::::: ${this.state.textArea}`);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <br />
            <input 
              name="username"
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput}/>
          </label>  
          <br />
          <br />
          <textarea 
            name="textarea"
            value={this.state.textarea} 
            onChange={this.handleInput}/>
          <br />
          <br />
          <select name="select" value={this.state.select} onChange={this.handleInput}>
            <option value="banana">banana</option>
            <option value="coconut">coconut</option>
            <option value="kiwi">kiwi</option>
            <option value="mango">mango</option>
            <option value="pear">pear</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit"/>
        </form>      
      </div>
    )
  }
}

export default Form
