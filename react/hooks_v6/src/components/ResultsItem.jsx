import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveFavorites, removeFavorite } from '../redux/actions';

function ResultsItem(props) {
  const {name, image_url, id, location} = props.listing;
  const [address1, address2] = location.display_address;
  const dispatch = useDispatch();
  const isFavorited = useSelector(state => state.favorites).hasOwnProperty(id) ? true : false;

  const handleFavoriteClick = () => {
    isFavorited
      ? dispatch(removeFavorite(id))
      : dispatch(receiveFavorites(props.listing));
  }

  return (
    <div className="item">
      <div
        className="image listing-item__image-container"
        style={{ backgroundImage: `url('${image_url}')` }}
      ></div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{address1}</p>
          <p>{address2}</p>
        </div>
        <div className="extra">
          <div className="ui right floated">
            <i
              className={`heart ${isFavorited ? "" : 'outline'} icon heart-icon`}
              onClick={handleFavoriteClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem
