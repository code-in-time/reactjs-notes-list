import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { NavLink } from 'react-router-dom';

const style = {
  height: '80vh',
  width: '80vw',
  margin: 20,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class DrawerButton extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleToggle = () => this.setState({ open: !this.state.open });
    this.handleClose = () => this.setState({ open: false });
  }

  render() {
    return (
      <div className="DrawerButton">
        <Paper style={style} zDepth={1}>
          <RaisedButton label="Open Drawer" onClick={this.handleToggle} />
        </Paper>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}><NavLink exact to="/" className="nav-link">HOME</NavLink></MenuItem>
          <MenuItem onClick={this.handleClose}>close</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default DrawerButton;
