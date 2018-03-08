import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import NavButtonLink from '../../shared/NavButtonLink';

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
          <MenuItem onClick={this.handleClose}>close</MenuItem>

          <MenuItem onClick={this.handleClose} {...this.props}>
            <NavButtonLink {...this.props} tourl="/" linktext="HOME" />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <NavButtonLink {...this.props} tourl="/movies" linktext="MOVIES" />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <NavButtonLink {...this.props} tourl="/phone" linktext="PHONE BOOK" />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <NavButtonLink {...this.props} tourl="/material-ui" linktext="MATERIAL-UI" />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default DrawerButton;
