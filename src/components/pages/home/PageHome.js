import React, { Component } from 'react';
import App from './App';
import Navigation from '../../shared/Navigation';

/**
 * This the the home Page
 * @class Home
 * @extends {Component}
 */
class PageHome extends Component {
  render() {
    return (
      <div className="PageHome">
        <Navigation />
        <App />
      </div>
    );
  }
}

export default PageHome;
