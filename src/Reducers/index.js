import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './noteReducer';
import phoneBookReducer from './phonebookReducer';
import itemsReducer from './itemsReducer';


const rootReducer = combineReducers({
  noteReducer,
  phoneBookReducer,
  itemsReducer,
  // FROM redux-form (you have to pass formReducer under 'form' key)
  form: formReducer,
});

export default rootReducer;
