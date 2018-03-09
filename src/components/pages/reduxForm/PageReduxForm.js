import React, { Component } from 'react';
import Navigation from '../../shared/Navigation';
import GeneralForm from './GeneralForm';

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
              <GeneralForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageReduxForm;
