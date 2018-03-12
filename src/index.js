import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { PropTypes } from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Componenets
import PageHome from './components/pages/home/PageHome';
import PageMovies from './components/pages/movies/PageMovies';
import PagePhoneBook from './components/pages/phonebook/PagePhoneBook';
import PageMaterialui from './components/pages/materialui/PageMaterialui';
import PageReduxForm from './components/pages/reduxForm/PageReduxForm';
import PageReduxThunk from './components/pages/reduxThunk/pageReduxThunk';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './Reducers/index';
import { actionNoteGetLatest } from './actions/noteActions';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.css';


// TODO: Turn redux devtools off for production using process.env.REACT_APP_ENV
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
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/movies" component={PageMovies} />
            <Route path="/phone" component={PagePhoneBook} />
            <Route path="/material-ui" component={PageMaterialui} />
            <Route path="/reduxform" component={PageReduxForm} />
            <Route path="/reduxthunk" component={PageReduxThunk} />
          </Switch>
        </Router>
      </MuiThemeProvider>
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

// Show the development environment except for production.
if (process.env.REACT_APP_ENV !== 'production') {
  console.log(process.env.REACT_APP_ENV);
}
