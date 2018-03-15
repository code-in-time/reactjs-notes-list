import actionTypes from '../constants/actionTypes';
import { apiLogin } from '../API';

/**
 * Change the load bool
 * @param {bool} isLoading
 */
export function actionLoginAPIisLoading(isLoading) {
  return {
    type: actionTypes.LOGIN_API_IS_LOADING,
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
    type: actionTypes.LOGIN_API_ERROR,
    payload: { isError, message },
  };
}

/**
 * The success when logged in
 * @param {object} profileData
 */
export function actionLoginAPIsuccess(profileData) {
  return {
    type: actionTypes.LOGIN_API_SUCCESS,
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
    type: actionTypes.LOGIN_DIALOG_OPEN,
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
