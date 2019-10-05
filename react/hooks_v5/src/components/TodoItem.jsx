import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, removeTodo } from "../redux/todo_action";

function Todoitem({ todo, idx }) {
  const dispatch = useDispatch();

  return (
    <div className="ui raised segment todo-item">
      <p className={todo.isCompleted ? "completed" : ""}>{todo.title}</p>
      <div className="todo-button__container">
        <button
          className="ui button mini basic"
          onClick={() => dispatch(updateTodo(idx))}
        >
          {todo.isCompleted ? "Mark Uncompleted" : "Mark Completed"}
        </button>
        <button
          className="ui button mini red basic"
          onClick={() => dispatch(removeTodo(idx))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todoitem
