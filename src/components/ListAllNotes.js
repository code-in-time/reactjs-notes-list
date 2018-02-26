import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListAllNotes.css';
import ListItem from './ListItem';

class ListAllNotes extends Component {
  // Render the List items
  buildListItems() {
    return this.props.appStateNotes
      .map((item) => {
        // Check if the listItem must be visible
        if (this.props.listsOfSelected !== item.selected) {
          // This is not a list item that must be visible
          // return an empty string
          return '';
        }
        console.log(this.props.appStateNotes);

        // This list item must be visible
        return (<ListItem
          key={item.id}
          note={item}
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
  appStateNotes: PropTypes.array.isRequired,
  updateAppNote: PropTypes.func.isRequired,
};
