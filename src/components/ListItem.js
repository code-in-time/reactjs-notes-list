import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem">
        <div className="ListItem_left">{this.props.note.text}</div>
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
  // // This must be 'seleted' or 'unselected'
  // listType: PropTypes.string.isRequired,
  note: PropTypes.object.isRequired,
  updateAppNote: PropTypes.func.isRequired,
};
