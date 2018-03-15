import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavButtonLink from './NavButtonLink';
import { actionLoginDialogOpen } from '../../../actions/loginActions';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">

            {this.props.authReducerProfileData === null &&
              <button
                type="button"
                className="btn btn-small h_margin-r-20px"
                onClick={() => this.props.actionLoginDialogOpen(true)}
              ><span>LOGIN <i className="fa fa-unlock" /></span>
              </button>
            }
            {this.props.authReducerProfileData !== null &&
            <button
              type="button"
              className="btn btn-small h_margin-r-20px"
              onClick={() => console.log('logout')}
            ><span>logout <i className="fa fa-lock" /></span>
            </button>
            }

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
  actionLoginDialogOpen: PropTypes.func.isRequired,
  authReducerProfileData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authReducerProfileData: state.authReducer.profileData,
});

const mapDispatchToProps = {
  actionLoginDialogOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
