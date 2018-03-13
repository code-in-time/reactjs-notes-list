import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavButtonLink from './NavButtonLink';
import { authLoginMechanism } from '../../actions/authActions';
import { PropTypes } from 'prop-types';

class Navigation extends Component {
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
          <li className="nav-item">
            <NavButtonLink {...this.props} tourl="/reduxthunk" linktext="REDUX-THUNK" />
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-small btn-primaer" onClick={() => this.props.authLoginMechanism()}>LOGIN</button>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  authLoginMechanism: PropTypes.func.isRequired,
};

// Using redux the phonebookReducer properties are now props
const mapDispatchToProps = {
  authLoginMechanism,
};

export default connect(null, mapDispatchToProps)(Navigation);
