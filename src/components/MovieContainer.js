import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { apiMovieSearch } from '../API/index';

class MovieContainer extends Component {
  componentDidMount() {
    // Do an api call to get the movies.
    apiMovieSearch('blade')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MovieContainer">
        <p>There is an API call that is return data to the console.</p>
      </div>
    );
  }
}

export default MovieContainer;
