import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavButtonLink from './NavButtonLink';
import { authLoginDialogOpen } from '../../../actions/authActions';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-small h_margin-r-20px"
              onClick={() => this.props.authLoginDialogOpen(true)}
            >LOGIN <i className="fa fa-lock" />
            </button>
          </li>
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
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  authLoginDialogOpen: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   loginIsLoading: state.authReducer.login.isLoading,
// });

// Using redux the phonebookReducer properties are now props
const mapDispatchToProps = {
  authLoginDialogOpen,
};

export default connect(null, mapDispatchToProps)(Navigation);


// <button
// disabled={this.props.loginIsLoading}
// type="button"
// className="btn btn-small btn-primaer"
// onClick={() => this.props.authLoginMechanism()}
// >{this.props.loginIsLoading ? (<i className="fa fa-spinner fa-spin" />) : (<span>LOGIN</span>)}
// </button>
