import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider, connect } from 'react-redux';
// TODO: Add middle ware
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { PropTypes } from 'prop-types';

// Componenets
import PageHome from './components/pages/PageHome';
import PageOther from './components/pages/PageOther';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './Reducers/index';
import { actionNoteGetLatest } from './actions/noteActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.css';


// TODO: Turn redux devtools off for production
// const store = createStore(combineReducers({ noteReducer }), {}, applyMiddleware(createLogger()));
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

class Index extends Component {
  componentDidMount() {
    // This is where the API would go to get the first data.
    // Get the notedata.
    this.props.actionNoteGetLatest();

    console.log(this);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/other" component={PageOther} />
        </Switch>
      </Router>
    );
  }
}

Index.propTypes = {
  actionNoteGetLatest: PropTypes.func.isRequired,
};

// Create a new wrapper so that redux connect is available.
const IndexWrapper = connect(null, { actionNoteGetLatest })(Index);

ReactDOM.render(<Provider store={store}><IndexWrapper /></Provider>, document.getElementById('root'));
registerServiceWorker();
