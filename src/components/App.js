import React, { Component } from 'react';
// import logo from '../images/logo.svg';

import '../styles/componets/App.css';
import ListAllNotes from './ListAllNotes';
// import ListSelectedNotes from './ListSelectedNotes';

class App extends Component {
  constructor(props) {
    super(props);

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

  // updateAppNote(id, note, selected) {
  //   // for (const value of this.state.notes) {
  //   //   if (value.id === id) {
  //   //     console.log(value);
  //   //   }
  //   // }
  // }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-xs-6 box">
              <ListAllNotes appStateNotes={this.state.notes} />
            </div>
            <div className="col col-xs-6 box">
              {/* <ListSelectedNotes appStateNotes={this.state.notes} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
