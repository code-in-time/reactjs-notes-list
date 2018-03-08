import React, { Component } from 'react';
import Navigation from '../../shared/Navigation';
import EmailForm from './EmailForm';

/**
 * This is the other Page
 * @class Other
 * @extends {Component}
 */
class PageReduxForm extends Component {
  render() {
    return (
      <div className="PageReduxForm">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageReduxForm;
