import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';
import { actionLoginDialogOpen } from '../../Reducers/loginReducer';

/**
 * This is an authentication Higher order componenet
 * @param {React Componenet} wrappedComponent This componenet will be wrapped
 */
export default function AuthenticationRequired(WrappedComponent) {
  class _AuthenticationRequired extends Component {
    componentDidMount() {
      console.log('xx', [this.props, this.props.authReducerProfile]);
      // Check if the user is logged in.
      if (isEmpty(this.props.authReducerProfile)) {
        // The user is not logged in, open the login dialog
        this.props.actionLoginDialogOpen(true);
      }
    }

    render() {
      // Check if the user is logged in.
      if (isEmpty(this.props.authReducerProfile)) {
        return <Redirect to="/" />;
      }

      return (
        <WrappedComponent {...this.props} >
          {this.props.children}
        </WrappedComponent>
      );
    }
  }

  _AuthenticationRequired.propTypes = WrappedComponent.propTypes;

  // Find out how to add more prop types?

  const mapStateToProps = state => ({ authReducerProfile: state.authReducer.profileData });

  const mapDispatchToProps = {
    actionLoginDialogOpen,
  };

  return connect(mapStateToProps, mapDispatchToProps)(_AuthenticationRequired);
}
