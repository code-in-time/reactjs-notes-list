import React, { Component } from 'react';
import '../styles/componets/ListSelectedNotes.css';
import ListItem from './ListItem';

class ListSelectedNotes extends Component {
  render() {
    return (
      <div className="ListSelectedNotes">
        <div className="card">
          <div className="card-body">
            <ListItem selected />
            <ListItem selected />
            <ListItem selected />
          </div>
        </div>
      </div>
    );
  }
}

export default ListSelectedNotes;
