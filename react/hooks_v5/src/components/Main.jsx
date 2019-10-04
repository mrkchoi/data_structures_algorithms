import React, { useState } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'


const INITIAL_STATE = [
  {
    title:
      "Build cool React app",
    isCompleted: true
  },
  {
    title: "Learn TypeScript",
    isCompleted: false
  },
  {
    title: "Eat delicious desserts",
    isCompleted: false
  }
];

function Main() {
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = todo => {
    let newTodo = {
      title: todo,
      isCompleted: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const updateTodo = todoIdx => {
    let status = todos[todoIdx].isCompleted;
    let newStatus = status === true ? false : true;
    setTodos(prevTodos => {
      let updatedState = [...prevTodos];
      updatedState[todoIdx].isCompleted = newStatus;
      return updatedState;
    });
  };

  const removeTodo = todoIdx => {
    setTodos(prevTodos => {
      let newState = [...prevTodos];
      newState.splice(todoIdx, 1);
      return newState;
    })
  };
  
  return (
    <div>
      <Todos todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default Main
