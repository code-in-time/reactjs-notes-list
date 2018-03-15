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
 * Set the Login dialog visibility
  {
    type: 'AUTH_LOGIN_DIALOG_OPEN',
    payload: { dialogOpen: true },
  };
 * @param {bool} dialogOpen
 */
export function authLoginDialogOpen(dialogOpen) {
  return {
    type: actionTypes.AUTH_LOGIN_DIALOG_OPEN,
    payload: { dialogOpen },
  };
}
