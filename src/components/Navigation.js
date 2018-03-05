import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink {...this.props} to="/movies" className="nav-link">MOVIES</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
