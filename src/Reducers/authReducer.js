import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

/**
 * null - logged out
 * object - logged in auth user
 */
const defaultState = {
  profileData: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_API_SUCCESS:
      state = deepClone(state);
      state.profileData = action.payload;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default authReducer;
