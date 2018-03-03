import React, { Component } from 'react';
import Navigation from '../Navigation';

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageOther;
