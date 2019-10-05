import React from 'react';
import ResultsItem from "./ResultsItem";
import { useSelector } from 'react-redux';

function Results() {
  const listings = useSelector(state => state.listings);
  
  if (!listings) return <p>Loading...</p>;

  return (
    <div className="ui items listings twelve wide column">
      <h3>Results</h3>
      {Object.values(listings).map((listing, idx) => (
        <ResultsItem key={idx} listing={listing} />
      ))}
    </div>
  );
}

export default Results;
