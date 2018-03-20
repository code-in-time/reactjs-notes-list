import { deepClone } from '../utils/general';
import { apiLogin } from '../API/index';

// actions
export const LOGIN_API_IS_LOADING = 'LOGIN_API_IS_LOADING';
export const LOGIN_API_ERROR = 'LOGIN_API_ERROR';
export const LOGIN_API_SUCCESS = 'LOGIN_API_SUCCESS';
export const LOGIN_DIALOG_OPEN = 'LOGIN_DIALOG_OPEN';

/**
 * Change the load bool
 * @param {bool} isLoading
 */
export function actionLoginAPIisLoading(isLoading) {
  return {
    type: LOGIN_API_IS_LOADING,
    payload: isLoading,
  };
}

/**
 * Set the loading text and bool
 * @param {bool} isError
 * @param {string} message
 */
export function actionLoginAPIerror(isError, message) {
  return {
    type: LOGIN_API_ERROR,
    payload: { isError, message },
  };
}

/**
 * The success when logged in
 * @param {object} profileData
 */
export function actionLoginAPIsuccess(profileData) {
  return {
    type: LOGIN_API_SUCCESS,
    payload: profileData,
  };
}

/**
 * Set the Login dialog visibility
  {
    type: 'LOGIN_DIALOG_OPEN',
    payload: true,
  }
 * @param {bool} visible
 */
export function actionLoginDialogOpen(visible) {
  return {
    type: LOGIN_DIALOG_OPEN,
    payload: visible,
  };
}


/**
 * This is so that the user can login
 * This is thunk action
 * This will dispatch other actions
 */
export function actionLoginAPIcall() {
  // NOTE getState is an options param
  // return (dispatch, getState) => {
  return (dispatch) => {
    // The API must show that is is loading
    dispatch(actionLoginAPIisLoading(true));
    // Add API CALL
    apiLogin()
      .then((res) => {
        console.log('data is returned');
        return res.data;
      })
      .then((data) => {
        dispatch(actionLoginAPIsuccess(data));
      })
      .catch(() => {
        dispatch(actionLoginAPIerror(true, 'error test'));
      })
      .finally(() => {
        dispatch(actionLoginAPIisLoading(false));
        dispatch(actionLoginDialogOpen(false));
        console.log('finally');
      });
  };
}

// default reducer state
const defaultState = {
  loginAPIisLoading: false,
  loginAPIerror: {
    isError: false,
    message: '',
  },
  loginDialogOpen: false,
};

// login reducer
const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_API_IS_LOADING:
      state = deepClone(state);
      state.loginAPIisLoading = action.payload;
      break;

    case LOGIN_API_ERROR:
      state = deepClone(state);
      state.loginAPIerror.isError = action.payload.isError;
      state.loginAPIerror.Message = action.payload.message;
      break;

    case LOGIN_DIALOG_OPEN:
      state = deepClone(state);
      state.loginDialogOpen = action.payload;
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default loginReducer;

