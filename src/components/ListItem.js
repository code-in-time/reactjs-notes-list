import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListItem.css';

class ListItem extends Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
  }

  /**
   * The event handler for whe the button is clicked.
   * @memberof ListItem
   */
  buttonClick() {
    // Copy thr prop note
    const newNote = { ...this.props.note };

    // Toggle the selected value
    newNote.selected = !newNote.selected;

    this.props.updateAppNote(newNote);
  }

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem_left">
          ID: {this.props.note.id}
          <br />
          {this.props.note.text}
        </div>
        <div className="ListItem_right">
          {this.props.note.selected === false ? (
            <button
              className="actionButton"
              onClick={this.buttonClick}
            >
              <div className="fa fa-check fa-lg" />
            </button>
          ) : (
            <button
              className="actionButton"
              onClick={this.buttonClick}
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
