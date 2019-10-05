export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

import * as APIUtil from './util';

const receiveAllListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveFavorites = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
});

export const fetchListings = query => dispatch => {
  return APIUtil.fetchListings(query)
    .then(listings => dispatch(receiveAllListings(listings.data.businesses)));
}

