import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

const defaultState = {
  loginAPIisLoading: false,
  loginAPIerror: {
    isError: false,
    message: '',
  },
  loginDialogOpen: false,
};

const loginApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_API_IS_LOADING:
      state = deepClone(state);
      state.loginAPIisLoading = action.payload;
      break;

    case actionTypes.LOGIN_API_ERROR:
      state = deepClone(state);
      state.loginAPIerror.isError = action.payload.isError;
      state.loginAPIerror.Message = action.payload.message;
      break;

    case actionTypes.LOGIN_DIALOG_OPEN:
      state = deepClone(state);
      state.loginDialogOpen = action.payload;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default loginApiReducer;
