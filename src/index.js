import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { PropTypes } from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Componenets
import PageHome from './components/pages/home/PageHome';
import PageMovies from './components/pages/movies/PageMovies';
import PagePhoneBook from './components/pages/phonebook/PagePhoneBook';
import PageMaterialui from './components/pages/materialui/PageMaterialui';
import PageReduxForm from './components/pages/reduxForm/PageReduxForm';
import PageReduxThunk from './components/pages/reduxThunk/pageReduxThunk';

import LoginDialogue from './components/shared/login/LoginDialog';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from './Reducers/index';
import { actionNoteGetLatest } from './Reducers/noteReducer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import AuthenticationRequired from './components/HOC/AuthenticationHOC';
import logger from './middlewareCustom/logger';

// TODO: Turn redux devtools off for production using process.env.REACT_APP_ENV
// const store = createStore(combineReducers({ noteReducer }), {}, applyMiddleware(createLogger()));
/* eslint-disable no-underscore-dangle */
const store = createStore(
  // Reducer
  rootReducer,
  // Preloaded state
  {},
  // Enhancer
  compose(
    // Middleware
    applyMiddleware(thunk, logger),
    // Redux browser debugger
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// Create the componenets that require authentication
const AuthRequiredPageMovies = AuthenticationRequired(PageMovies);
const AuthRequiredPagePhoneBook = AuthenticationRequired(PagePhoneBook);
const AuthRequiredPageMaterialui = AuthenticationRequired(PageMaterialui);
const AuthRequiredPageReduxForm = AuthenticationRequired(PageReduxForm);
const AuthRequiredPageReduxThunk = AuthenticationRequired(PageReduxThunk);

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
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/movies" component={AuthRequiredPageMovies} />
              <Route path="/phone" component={AuthRequiredPagePhoneBook} />
              <Route path="/material-ui" component={AuthRequiredPageMaterialui} />
              <Route path="/reduxform" component={AuthRequiredPageReduxForm} />
              <Route path="/reduxthunk" component={AuthRequiredPageReduxThunk} />
            </Switch>
          </Router>

          <LoginDialogue />
        </div>
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
