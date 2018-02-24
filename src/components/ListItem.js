import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem">
        <div className="ListItem_left">A note will be added here</div>
        <div className="ListItem_right">
          {this.props.note.selected === false ? (
            <button
              className="actionButton"
              onClick={() => this.props.updateAppNote(this.props.note)}
            >
              <div className="fa fa-check fa-lg" />
            </button>
          ) : (
            <button
              className="actionButton"
              onClick={() => this.props.updateAppNote(this.props.note)}
            >
              <div className="fa fa-times fa-lg" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ListItem;

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
  updateAppNote: PropTypes.func.isRequired,
};
