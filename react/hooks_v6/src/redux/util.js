import axios from 'axios';

export const fetchListings = (query='San Francisco') => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${query}`,
    {
      headers: {
        Authorization: `Bearer ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx`
      }
    }
  );
}
