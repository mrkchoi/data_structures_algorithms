import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './todo_action';

const reducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch(action.type) {
    case ADD_TODO:
      let newTodo = {
        title: action.title,
        isCompleted: false
      }
      newState.todos = [...state.todos]
      newState.todos.push(newTodo);
      return newState;
    case UPDATE_TODO:
      newState.todos = [...state.todos];
      newState.todos[action.todoIdx].isCompleted = 
      !newState.todos[action.todoIdx].isCompleted;
      return newState;
    case REMOVE_TODO:
      newState.todos = [...state.todos];
      newState.todos.splice(action.todoIdx, 1);
      return newState;
    default:
      return newState;
  }
};

export default reducer;
