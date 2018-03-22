import { deepClone } from '../utils/general';
import { LOGIN_API_SUCCESS } from './loginReducer';

/**
 * The default state
 * object - logged out empty object
 * object - logged in auth user
 */
const defaultState = {
  profileData: {},
};

// the auth reducer
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_API_SUCCESS:
      state = deepClone(state);
      state.profileData = action.payload;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default authReducer;
