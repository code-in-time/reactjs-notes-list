import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default class NavButtonLink extends Component {
  render() {
    return (<NavLink exact {...this.props} to={this.props.tourl} className="nav-link">{this.props.linktext}</NavLink>
    );
  }
}

NavButtonLink.propTypes = {
  // The page to link to example (./movies)
  tourl: PropTypes.string.isRequired,
  // The text in link that is visible in the DOM example (MOVIES)
  linktext: PropTypes.string.isRequired,
};

