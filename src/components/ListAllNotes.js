import React, { Component } from 'react';
import '../styles/componets/ListAllNotes.css';
import ListItem from './ListItem';

class ListAllNotes extends Component {
  render() {
    return (
      <div className="ListAllNotes">
        <div className="card">
          <div className="card-body">
            <ListItem selected={false} />
            <ListItem selected={false} />
            <ListItem selected={false} />
            <ListItem selected={false} />
            <ListItem selected={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListAllNotes;
