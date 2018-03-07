import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class ListAllNotes extends Component {
  // Render the List items
  buildListItems() {
    return this.props.noteReducer
      .map((item) => {
        // Check if the listItem must be visible
        if (this.props.listsOfSelected !== item.selected) {
          // This is not a list item that must be visible
          // return an empty string
          return '';
        }
        console.log(this.props.noteReducer);

        // This list item must be visible
        return (<ListItem
          key={item.id}
          note={item}
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

// Using redux the noteReducer is now a prop
const mapStateToProps = state => ({
  noteReducer: state.noteReducer,
});

export default connect(mapStateToProps)(ListAllNotes);


ListAllNotes.propTypes = {
  // This must be seleted = true or unselected = false
  listsOfSelected: PropTypes.bool.isRequired,
  // This is set by redux
  noteReducer: PropTypes.array.isRequired,
  // appStateNotes: PropTypes.array.isRequired,
  // updateAppNote: PropTypes.func.isRequired,
};
