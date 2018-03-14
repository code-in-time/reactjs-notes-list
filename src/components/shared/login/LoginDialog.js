import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { PropTypes } from 'prop-types';
import { authLoginDialogOpen } from '../../../actions/authActions';

class LoginDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          contentStyle={{ maxWidth: '300px' }}
          title="Login"
          modal={false}
          open={this.props.loginDialogOpen}
          // Close the dialog
          onRequestClose={() => this.props.authLoginDialogOpen(false)}
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
          <RaisedButton label="LOGIN" primary fullWidth className="h_margin-t-20px" />
        </Dialog>
      </div>
    );
  }
}

LoginDialog.propTypes = {
  loginDialogOpen: PropTypes.bool.isRequired,
  authLoginDialogOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginDialogOpen: state.authReducer.login.dialogOpen,
});

const mapDispatchToProps = {
  authLoginDialogOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
