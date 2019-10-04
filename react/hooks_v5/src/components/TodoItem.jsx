import React from 'react'

function Todoitem({ todo, idx, updateTodo, removeTodo }) {
  return (
    <div className="ui raised segment todo-item">
      <p className={todo.isCompleted ? "completed" : ""}>{todo.title}</p>
      <div className="todo-button__container">
        <button
          className="ui button mini basic"
          onClick={() => updateTodo(idx)}
        >
          {todo.isCompleted ? "Mark Uncompleted" : "Mark Completed"}
        </button>
        <button className="ui button mini red basic" onClick={() => removeTodo(idx)}>Remove</button>
      </div>
    </div>
  );
}

export default Todoitem
