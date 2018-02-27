import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/componets/AddNewNote.css';

class AddNewNote extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);

    // Set the state
    this.state = {
      // The text from the input
      noteText: '',
    };
  }

  onChangeInput(evt) {
    // Set the state
    this.setState({
      // Get the text from the input
      noteText: evt.target.value,
    });
  }

  render() {
    return (
      <div className="AddNewNote card card-body bg-light">
        <h3>Create a new note</h3>
        <div className="row">
          <div className="col">
            <input value={this.state.noteText}onChange={this.onChangeInput} placeholder="Add new note here" type="text" name="" id="" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <button onClick={() => this.props.addAppNote(this.state.noteText)} className="btn btn-primary">add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewNote;

AddNewNote.propTypes = {
  addAppNote: PropTypes.func.isRequired,
};
