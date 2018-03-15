import actionTypes from '../constants/actionTypes';

/**
 * Set the authenticated user data
 * @param {object} profileData
 */
export default function authUserDataSet(profileData) {
  return {
    type: actionTypes.AUTH_DATA_SET,
    payload: profileData,
  };
}
