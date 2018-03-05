import React, { Component } from 'react';
import Navigation from '../Navigation';
import MovieContainer from '../MovieContainer';

/**
 * This is the other Page
 * @class Other
 * @extends {Component}
 */
class PageOther extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              This is the other page
              <MovieContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageOther;
