// These are the actions type;
const actionTypes = {
  NOTE_CREATE: 'NOTE_CREATE',
  NOTE_SELECTED_TOGGLE: 'NOTE_SELECTED_TOGGLE',
  NOTE_GET_LATEST: 'NOTE_GET_LATEST',
  NOTE_CLEAR_ALL: 'NOTE_CLEAR_ALL',

  PHONEBOOK_GET_DATA: 'PHONEBOOK_GET_DATA',
  PHONEBOOK_ENTRY_ADD: 'PHONEBOOK_ENTRY_ADD',
  PHONEBOOK_SEARCH: 'PHONEBOOK_SEARCH',

  ITEMS_HAS_ERRORED: 'ITEMS_HAS_ERRORED',
  ITEMS_IS_LOADING: 'ITEMS_IS_LOADING',
  ITEMS_FETCH_DATA_SUCCESS: 'ITEMS_FETCH_DATA_SUCCESS',

  AUTH_LOGIN_IS_LOADING: 'AUTH_LOGIN_IS_LOADING',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  AUTH_LOGIN_SUCCESS_WITH_DATA: 'AUTH_LOGIN_SUCCESS_WITH_DATA',
  AUTH_LOGIN_DIALOG_OPEN: 'AUTH_LOGIN_DIALOG_OPEN',

  LOGIN_API_LOADING: 'LOGIN_API_LOADING',
  LOGIN_API_ERROR: 'LOGIN_API_ERROR',

  DIALOG_LOGIN_OPEN: 'DIALOG_LOGIN_OPEN',
};

export default actionTypes;

