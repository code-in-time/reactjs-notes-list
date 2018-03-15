import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { PropTypes } from 'prop-types';
import { actionLoginDialogOpen, actionLoginAPIcall } from '../../../actions/loginActions';

class LoginDialog extends Component {
  constructor() {
    super();
    this.btnClickLogin = this.btnClickLogin.bind(this);
  }

  /**
   * The click handler for clicking on the login button
   */
  btnClickLogin() {
    // Call the login API.
    this.props.actionLoginAPIcall();
  }

  render() {
    return (
      <div>
        <Dialog
          contentStyle={{ maxWidth: '300px' }}
          title="Login"
          modal={false}
          open={this.props.loginDialogOpen}
          // Close the dialog
          onRequestClose={() => this.props.actionLoginDialogOpen(false)}
        >
          <TextField
            hintText="Name"
            floatingLabelText="Please enter your name"
            fullWidth
          /><br />
          <TextField
            hintText="Password"
            floatingLabelText="Please enter a Password"
            type="password"
            fullWidth
          /><br />
          <RaisedButton
            label="LOGIN"
            primary
            disabled={this.props.loginAPIisLoading}
            fullWidth
            className="h_margin-t-20px"
            onClick={this.btnClickLogin}
          >
            {this.props.loginAPIisLoading && (<i className="fa fa-spinner fa-spin" />)}
          </RaisedButton>
        </Dialog>
      </div>
    );
  }
}

LoginDialog.propTypes = {
  loginDialogOpen: PropTypes.bool.isRequired,
  loginAPIisLoading: PropTypes.bool.isRequired,
  actionLoginDialogOpen: PropTypes.func.isRequired,
  actionLoginAPIcall: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginDialogOpen: state.loginReducer.loginDialogOpen,
  loginAPIisLoading: state.loginReducer.loginAPIisLoading,
});

const mapDispatchToProps = {
  actionLoginDialogOpen,
  actionLoginAPIcall,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
