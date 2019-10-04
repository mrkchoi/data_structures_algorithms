import React from 'react'
import TodoItem from './TodoItem'

function Todos({ todos, updateTodo, removeTodo }) {
  return (
    <div>
      {todos.map((todo, idx) => <TodoItem key={idx} idx={idx} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>)}
    </div>
  );
}

export default Todos
