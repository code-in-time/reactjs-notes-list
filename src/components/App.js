import React, { Component } from 'react';
// import logo from '../images/logo.svg';

import '../styles/componets/App.css';
import ListAllNotes from './ListAllNotes';
import AddNewNote from './AddNewNote';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateAppNote = this.updateAppNote.bind(this);
    this.addAppNote = this.addAppNote.bind(this);

    // Setup the state
    this.state = {
      notes: [
        {
          id: 1,
          text: 'this is text 1',
          selected: false,
        },
        {
          id: 2,
          text: 'this is text 2',
          selected: false,
        },
        {
          id: 3,
          text: 'this is text 3',
          selected: false,
        },
        {
          id: 4,
          text: 'this is text 4',
          selected: false,
        },
      ],
    };
  }

  /**
   * Add a new note
   * @param {any} text
   * @memberof App
   */
  addAppNote(text) {
    console.log('add a new note');
    // Clone the notes array.
    const newNotes = this.state.notes.slice(0);
    // Get the date
    const d = new Date();

    // Add a new note
    newNotes.push({
      // Add a new id from the time
      id: d.getTime(),
      text,
      selected: false,
    });

    // Update the state
    this.setState({
      notes: newNotes,
    });
  }

  /**
   * This will update an existing note.
   *
   * @param {object} note
   * @memberof App
   */
  updateAppNote(note) {
    // Clone the notes array.
    const newNotes = this.state.notes.slice(0);
    const noteLength = newNotes.length;

    for (let i = 0; i < noteLength; i++) {
      // Check for the note that changed
      if (newNotes[i].id === note.id) {
        // This is the note that must be updated.
        // Update this note
        newNotes[i] = note;
        // Exit the loop
        break;
      }
    }

    // Update the state
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AddNewNote addAppNote={this.addAppNote} />
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-6 box">
              <ListAllNotes
                listsOfSelected={false}
              />
            </div>
            <div className="col col-xs-6 box">
              <ListAllNotes
                listsOfSelected
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
