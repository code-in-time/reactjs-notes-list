import React, { Component } from 'react';
import App from './App';
import Navigation from '../../shared/navigation/Navigation';
import SimpleForm from '../reduxForm/SimpleForm';

/**
 * This the the home Page
 * @class Home
 * @extends {Component}
 */
class PageHome extends Component {
  render() {
    return (
      [
        <div className="PageHome">
          <Navigation />
          <App />
        </div>,
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <SimpleForm />
            </div>
          </div>
        </div>]
    );
  }
}

export default PageHome;
