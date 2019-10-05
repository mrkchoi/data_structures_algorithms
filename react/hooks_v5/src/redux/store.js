import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';

const DEFAULT_STATE = {
  todos: [
    {
      title: "Build cool React app",
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
  ]
};

const configureStore = (preloadedState = DEFAULT_STATE) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(logger));
};

export default configureStore;
