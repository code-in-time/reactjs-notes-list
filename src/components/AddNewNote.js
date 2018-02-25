import React, { Component } from 'react';

import '../styles/componets/AddNewNote.css';

class AddNewNote extends Component {
  render() {
    return (
      <div className="AddNewNote card card-body bg-light">
        <h3>Create a new note</h3>
        <div className="row">
          <div className="col">
            <input placeholder="Add new note here" type="text" name="" id="" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <button disabled="disabled" className="btn btn-primary">add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewNote;
