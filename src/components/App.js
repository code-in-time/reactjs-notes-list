import React, { Component } from 'react';
// import logo from '../images/logo.svg';

import '../styles/componets/App.css';
import ListAllNotes from './ListAllNotes';
import AddNewNote from './AddNewNote';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateAppNote = this.updateAppNote.bind(this);

    // Setup the state
    this.state = {
      notes: {
        1: {
          id: 1,
          text: 'this is text 1',
          selected: false,
        },
        2: {
          id: 2,
          text: 'this is text 2',
          selected: false,
        },
        3: {
          id: 3,
          text: 'this is text 3',
          selected: false,
        },
        4: {
          id: 4,
          text: 'this is text 4',
          selected: false,
        },
      },
    };
  }

  updateAppNote(note) {
    // Create a new state object
    const newNotes = { ...this.state.notes };
    // Toggle the selected value
    newNotes[note.id].selected = !newNotes[note.id].selected;

    console.log(`clck + ${note}`, [this, note]);
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
              <AddNewNote />
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-6 box">
              <ListAllNotes
                listsOfSelected={false}
                appStateNotes={this.state.notes}
                updateAppNote={this.updateAppNote}
              />
            </div>
            <div className="col col-xs-6 box">
              <ListAllNotes
                listsOfSelected
                appStateNotes={this.state.notes}
                updateAppNote={this.updateAppNote}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
