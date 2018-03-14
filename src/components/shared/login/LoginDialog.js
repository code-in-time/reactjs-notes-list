import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

export default class LoginDialogue extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Dialog With Actions"

          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

// actions={actions}
