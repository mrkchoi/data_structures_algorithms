import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFavorite } from "../redux/actions";

function FavoritesItem({ favorite }) {

  const dispatch = useDispatch();

  return (
    <div className="item" onClick={() => dispatch(removeFavorite(favorite.id))}>
      <div className="right floated content">
        <div className="ui">
          <i className="heart icon heart-icon"></i>
        </div>
      </div>
      <div className="content">{favorite.name}</div>
    </div>
  );
}

export default FavoritesItem
