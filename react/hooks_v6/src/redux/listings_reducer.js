import { RECEIVE_LISTINGS } from "./actions";

export const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      let listings = [...action.listings];
      let newListings = {};
      listings.forEach(listing => (newListings[listing.id] = listing));
      return newListings;
    default:
      return newState;
  }
};
