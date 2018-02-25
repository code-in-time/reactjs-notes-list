import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListAllNotes.css';
import ListItem from './ListItem';

class ListAllNotes extends Component {
  // Render the List items
  buildListItems() {
    return Object.keys(this.props.appStateNotes)
      .map((item) => {
        // Check if the listItem must be visible
        if (this.props.listsOfSelected !== this.props.appStateNotes[item].selected) {
          // This is not a list item that must be visible
          // return an empty string
          return '';
        }

        // This list item must be visible
        return (<ListItem
          key={this.props.appStateNotes[item].id}
          note={this.props.appStateNotes[item]}
          updateAppNote={this.props.updateAppNote}
        />);
      });
  }

  render() {
    return (
      <div className="ListAllNotes">
        <div className="card">
          <div className="card-body">{this.buildListItems()}</div>
        </div>
      </div>
    );
  }
}

export default ListAllNotes;

ListAllNotes.propTypes = {
  // This must be seleted = true or unselected = false
  listsOfSelected: PropTypes.bool.isRequired,
  appStateNotes: PropTypes.object.isRequired,
  updateAppNote: PropTypes.func.isRequired,
};
