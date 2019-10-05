import { combineReducers } from 'redux';
import { favoritesReducer } from './favorites_reducer';
import { listingsReducer } from './listings_reducer';

export const rootReducer = combineReducers({
  listings: listingsReducer,
  favorites: favoritesReducer
});
