import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" activeClassName="active">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/other" className="nav-link" activeClassName="active">OTHER</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
