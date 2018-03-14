import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import { PropTypes } from 'prop-types';

class LoginDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          modal={false}
          open={this.props.loginDialogOpen}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

LoginDialog.propTypes = {
  loginDialogOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loginDialogOpen: state.authReducer.login.dialogOpen,
});

export default connect(mapStateToProps)(LoginDialog);
