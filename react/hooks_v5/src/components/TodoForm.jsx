import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(inputValue);
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
``