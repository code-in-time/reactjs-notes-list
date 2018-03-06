import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import phoneBookReducer from './phonebookReducer';


const rootReducer = combineReducers({ noteReducer, phoneBookReducer });

export default rootReducer;
