import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

const defaultState = {
  login: false,
};

const dialogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DIALOG_LOGIN_OPEN:
      state = deepClone(state);
      state.login = action.payload;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default dialogsReducer;
