import React, { Component } from 'react';
import Navigation from '../../shared/navigation/Navigation';
import MovieContainer from './MovieContainer';

/**
 * This is the other Page
 * @class Other
 * @extends {Component}
 */
class PageMovies extends Component {
  render() {
    return (
      <div className="PageMovies">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <MovieContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageMovies;
