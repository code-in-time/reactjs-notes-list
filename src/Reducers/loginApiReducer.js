import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

const defaultState = {
  apiIsLoading: false,
  apiError: {
    isError: false,
    message: '',
  },
};

const loginApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_API_LOADING:
      state = deepClone(state);
      state.login.apiIsLoading = action.payload;
      break;

    case actionTypes.LOGIN_API_ERROR:
      state = deepClone(state);
      state.error.isError = action.payload.isError;
      state.error.isErrorMessage = action.payload.message;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default loginApiReducer;
