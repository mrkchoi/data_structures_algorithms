import React from 'react';
import Results from './results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const key = '';
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${this.state.query}&limit=1`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then(results => {
        this.setState({
          results
        })
      });
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="searchbar__container">
          <h4>
            SearchBar
          </h4>
          <form action="POST" className="searchbar__form" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              value={this.state.query} 
              placeholder="Enter your search..."
              onChange={this.handleChange}/>
            <input 
              type="submit" 
              value="Search"/>
          </form>
        </div>
        <div className="results__container">
          <Results results={this.state.results}/>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;