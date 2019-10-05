import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchListings } from '../redux/actions';


function SearchBar() {
  const [query, setQuery] = useState("San Francisco");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings('San Francisco'));
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchListings(query));
  }

  return (
    <div className="ui container">
      <form onSubmit={handleSubmit} className="ui form search-form">
        <input
          type="text"
          placeholder="Enter a city.."
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <input 
          type="submit" 
          value="Search"
          className="ui button white"
        />
      </form>
    </div>
  );
}

export default SearchBar
