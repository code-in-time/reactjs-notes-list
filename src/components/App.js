import React, { Component } from 'react';


import '../styles/componets/App.css';
import ListAllNotes from './ListAllNotes';
import NoteControls from './NoteControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <NoteControls />
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
