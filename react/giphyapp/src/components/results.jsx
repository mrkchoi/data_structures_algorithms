import React from 'react';
import ResultItem from './result_item';

class Results extends React.Component {
  render() {
    let results;

    if (this.props.results !== null) {
      results = this.props.results.data.map((res, idx) => (
        <ResultItem url={res.images.original.url} key={idx}/>
      ));
    } else {
      results = (
        <div>Results will show here...</div>
      )
    }

    return (
      <div className="results__container--inner">
        <h4>Results</h4>
        <div className="results">
          { results }
        </div>

      </div>
    );
  }
}

export default Results;