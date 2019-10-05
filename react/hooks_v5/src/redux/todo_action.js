export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  title: todo
});

export const updateTodo = todoIdx => ({
  type: UPDATE_TODO,
  todoIdx: todoIdx
});

export const removeTodo = todoIdx => ({
  type: REMOVE_TODO,
  todoIdx: todoIdx
});



