import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItem from "./FavoritesItem";

function Favorites() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="four wide column favorites">
      <h3>Favorites</h3>
      <div className="ui middle aligned divided list">
        {Object.values(favorites).map((favorite, idx) => <FavoritesItem favorite={favorite} key={idx} />)}
      </div>
    </div>
  );
}

export default Favorites
