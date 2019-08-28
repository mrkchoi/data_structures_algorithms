import React from 'react';
import faker from 'faker';
import Fuse from 'fuse.js';

// It's important to have `className="item"` to pass the tests
// const DEFAULT_ITEM_RENDERER = user => <div className="item">{user.name}</div>;



function simulateResponseTime({ min, max }) {
  return Math.floor(Math.random() * (max - min) + min);
}

faker.seed(42);

const users = Array.from({ length: 100 }).map(() => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email()
  };
});

const fuse = new Fuse(users, {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["name"]
});

/**
 * Search users by name
 * @param {string} query - The query to search users by
 * @return {Promise<{ name: string; email: string; }[]>} Search result
 */
function searchUsersByName(query) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(fuse.search(query));
    }, simulateResponseTime({ min: 200, max: 350 }));
  });
}


class Autocomplete extends React.Component {
  // Use this item renderer or implement your custom one, but don't forget to provide `className="item"`
  // const itemRenderer = DEFAULT_ITEM_RENDERER;

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      users: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleChange(e) {
    let query = e.target.value;
    console.log(query);
    this.setState({
      query
    }, () => {
      // api call to fetch matches
      searchUsersByName(this.state.query)
        .then(users => {
          this.setState({
            users
          });
        })
    });
  }

  handleUserClick(e) {
    let currentUser = e.target.textContent;
    this.setState({
      query: currentUser
    });
  }

  render() {
    let allUsers;

    if (!this.state.users) {
      allUsers = (
        <div></div>
      );
    } else {
      allUsers = this.state.users.map((user, idx) => {
        return (
          <div className="item" key={idx}>{user.name}</div>
        )
      });
    }

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.query} />

        <div className="users" onClick={this.handleUserClick}>{allUsers}</div>
      </div>
    );
  }
}


export default Autocomplete;