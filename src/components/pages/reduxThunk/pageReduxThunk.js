import React, { Component } from 'react';
import Navigation from '../../shared/navigation/Navigation';
import ListView from './ListView';

/**
 * Following this tutorial
 * https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
 */

/**
 * This is the redux-thunk Page
 * @class Other
 * @extends {Component}
 */
class PageReduxThunk extends Component {
  render() {
    return (
      <div className="PageReduxThunk">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <ListView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageReduxThunk;
