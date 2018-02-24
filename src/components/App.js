import React, { Component } from 'react';
// import logo from '../images/logo.svg';

import '../styles/componets/App.css';
import ListAllNotes from './ListAllNotes';
import ListSelectedNotes from './ListSelectedNotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-xs-6 box">
              <ListAllNotes />
            </div>
            <div className="col col-xs-6 box">
              <ListSelectedNotes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
