import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../redux/todo_action"

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  }

  return (
    <div className="ui segment">
      <form className="ui form todo-form mini" onSubmit={handleSubmit}>
        <input 
          className="ui small"
          type="text" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)} 
          placeholder="Enter a todo..."/>
        <input type="submit" value="Add Todo" className="ui button mini blue todo-form__btn"/>
      </form>
    </div>
  );
}

export default TodoForm
