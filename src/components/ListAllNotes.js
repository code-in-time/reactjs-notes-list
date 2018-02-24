import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/ListAllNotes.css';
import ListItem from './ListItem';

class ListAllNotes extends Component {
  // Render the List items
  buildListItems() {
    return Object.keys(this.props.appStateNotes)
      .map(item => <ListItem key={this.props.appStateNotes[item].id} note={this.props.appStateNotes[item]} />);
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
  appStateNotes: PropTypes.object.isRequired,
};
