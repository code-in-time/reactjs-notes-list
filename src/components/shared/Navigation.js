import React, { Component } from 'react';
import NavButtonLink from './NavButtonLink';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/" linktext="HOME" />
          </li>
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/movies" linktext="MOVIES" />
          </li>
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/phone" linktext="PHONE BOOK" />
          </li>
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/material-ui" linktext="MATERIAL-UI" />
          </li>
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/reduxform" linktext="REDUX-FORM" />
          </li>
        </ul>
      </nav>
    );
  }
}
