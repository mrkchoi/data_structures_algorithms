import React from 'react'
import "./App.css";
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Main from './components/Main';
const store = configureStore();

import { fetchListings, receiveFavorites } from "./redux/actions";
window.fetchListings = fetchListings;
window.receiveFavorites = receiveFavorites;
window.dispatch = store.dispatch;


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App
