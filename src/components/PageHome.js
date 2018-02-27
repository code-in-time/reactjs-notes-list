import React, { Component } from 'react';
import App from './App';
import Navigation from './Navigation';

/**
 * This the the home Page
 * @class Home
 * @extends {Component}
 */
class PageHome extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <App />
      </div>
    );
  }
}

export default PageHome;
