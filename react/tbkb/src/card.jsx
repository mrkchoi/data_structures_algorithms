import React, { Component } from 'react'

class Card extends Component {

  render() {
    return (
      <div className="card ui card">
        <h4>{this.props.name}</h4>
        <div className="todos">
          {(Object.values(this.props.todos)).map((todo, idx) => {
            return (
              <div className="todoitem" key={idx} id={todo.id}>
                <p onClick={() => this.props.handleUpdateTodo(this.props.id, todo.id)}>{todo.text}</p>
                <button className="closeTodo ui button tiny" onClick={() => this.props.handleDeleteTodo(this.props.id, todo.id)}>Delete</button>
              </div>
            );
          })}
        </div>
        <button className="addTodoBtn ui button tiny primary basic" onClick={() => this.props.handleAddTodo(this.props.id)}>+ Todo</button>
      </div>
    )
  }
}

export default Card;

