import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from "./actions";

export const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FAVORITE:
      newState[action.favorite.id] = action.favorite;
      return newState;
    case REMOVE_FAVORITE:
      delete newState[action.favoriteId];
      return newState;
    default:
      return newState;
  }
};
