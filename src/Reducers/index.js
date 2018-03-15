import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './noteReducer';
import phoneBookReducer from './phonebookReducer';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
  noteReducer,
  phoneBookReducer,
  itemsReducer,
  authReducer,
  loginReducer,
  // FROM redux-form (you have to pass formReducer under 'form' key)
  form: formReducer,
});

export default rootReducer;
