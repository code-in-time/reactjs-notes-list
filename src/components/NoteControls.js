import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionNoteCreate, actionNoteClearAll, actionNoteGetLatest } from '../actions/noteActions';

class NoteControls extends Component {
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
      <div className="NoteControls card card-body bg-light">
        <h3>Create a new note</h3>
        <div className="row">
          <div className="col">
            <input value={this.state.noteText}onChange={this.onChangeInput} placeholder="Add new note here" type="text" name="" id="" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <button onClick={() => this.props.actionNoteCreate(this.state.noteText)} className="btn btn-primary">add</button>
          </div>
          <div className="col">
            <div className="btn-group btn-group-sm">
              <button onClick={() => this.props.actionNoteClearAll()} className="btn btn-danger">Clear all Notes</button>
              <button onClick={() => this.props.actionNoteGetLatest()} className="btn">RELOAD</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NoteControls.propTypes = {
  actionNoteCreate: PropTypes.func.isRequired,
  actionNoteClearAll: PropTypes.func.isRequired,
  actionNoteGetLatest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionNoteCreate,
  actionNoteClearAll,
  actionNoteGetLatest,
};

export default connect(null, mapDispatchToProps)(NoteControls);


// NB : NOTE
// This is how an action creater is added if it is in this file
// const mapDispatchToProps = dispatch => ({
//   noteCreate: (text) => {
//     dispatch({
//       type: actionTypes.NOTE_CREATE,
//       payload: text,
//     });
//   },
// });
