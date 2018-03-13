import actionTypes from '../constants/actionTypes';
import { apiLogin } from '../API';

/**
 * Change the load bool
 * @param {bool} isLoading
 */
export function authLoginIsLoading(isLoading) {
  return {
    type: actionTypes.AUTH_LOGIN_IS_LOADING,
    payload: { isLoading },
  };
}

/**
 * Set the loading text and bool
 * @param {bool} isError
 * @param {string} isErrorMessage
 */
export function authLoginEror(isError, isErrorMessage) {
  return {
    type: actionTypes.AUTH_LOGIN_IS_LOADING,
    payload: { isError, isErrorMessage },
  };
}

/**
 * The success when logged in
 * @param {object} profile
 */
export function authLoginSuccessWithData(profile) {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS_WITH_DATA,
    payload: {
      login: {
        profile,
        loggedIn: true,
      },
    },
  };
}

/**
 * This is so that the user can login
 * This is thunk action
 * This will dispatch other actions
 */
export function authLoginMechanism() {
  return (dispatch, getState) => {
    console.log('getstate', getState());
    // Add API CALL
    apiLogin()
      .then((res) => {
        dispatch(authLoginIsLoading(true));
        return res.data;
      })
      .then((data) => {
        dispatch(authLoginSuccessWithData(data));
      })
      .catch(() => {
        dispatch(authLoginEror(true, 'error test'));
      })
      .finally(() => {
        dispatch(authLoginIsLoading(false));
        console.log('finally');
      });
  };
}