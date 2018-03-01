import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import noteReducer from './Reducers/noteReducer';

// Componenets
import PageHome from './components/PageHome';
import PageOther from './components/PageOther';


import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/index.css';

const store = createStore(combineReducers({noteReducer}), {}, applyMiddleware(createLogger()));

const Main = () => (
  <Provider store={store}>
    <div className="Main">
      <Router>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/other" component={PageOther} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
