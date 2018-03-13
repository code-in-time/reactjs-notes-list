import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

const defaultState = {
  login: {
    profile: {},
    loggedIn: false,
    isLoading: false,
    error: {
      isError: false,
      isErrorMessage: '',
    },
  },
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_IS_LOADING:
      state = deepClone(state);
      state.login.isLoading = action.payload.isLoading;
      break;

    case actionTypes.AUTH_LOGIN_ERROR:
      state = deepClone(state);
      state.error.isError = action.payload.isError;
      state.error.isErrorMessage = action.payload.isErrorMessage;
      break;

    case actionTypes.AUTH_LOGIN_SUCCESS_WITH_DATA:
      state = deepClone(state);
      state.login.loggedIn = action.payload.login.loggedIn;
      state.login.profile = action.payload.login.profile;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default authReducer;
