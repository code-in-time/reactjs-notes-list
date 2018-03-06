import actionTypes from '../constants/actionTypes';

/**
 * This will get the lastes phonebook data
 */
export const actionPhoneBookGetData = () => ({
  type: actionTypes.PHONEBOOK_GET_DATA,
  // There is no payload
});

/**
 * The action to add a new entry to the phone book
 * @param {string} name Thhe users name
 * @param {string} phoneNumber The phone number
 */
export const actionPhoneBookEntryAdd = (name, phoneNumber) => ({
  type: actionTypes.PHONEBOOK_ENTRY_ADD,
  payload: {
    name,
    phoneNumber,
  },
});

/**
 * This action to get the number or name to search in the phone book data
 * @param {string} searchTerm The searm term this can be a number or a name
 */
export const actionPhoneBookSearch = searchTerm => ({
  type: actionTypes.PHONEBOOK_SEARCH,
  payload: {
    searchTerm,
  },
});
