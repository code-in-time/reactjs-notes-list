import initialPhoneBookData from '../data/initialPhoneBookData';
import { deepClone } from '../utils/general';

/**
 * ----------------------------------
 * The Phonebook Reducer file.
 * ----------------------------------
 */

// action types
export const PHONEBOOK_GET_DATA = 'PHONEBOOK_GET_DATA';
export const PHONEBOOK_ENTRY_ADD = 'PHONEBOOK_ENTRY_ADD';
export const PHONEBOOK_SEARCH = 'PHONEBOOK_SEARCH';

// Action creators
/**
 * This will get the lastes phonebook data
 */
export const actionPhoneBookGetData = () => ({
  type: PHONEBOOK_GET_DATA,
  // There is no payload
});

/**
 * The action to add a new entry to the phone book
 * @param {string} name Thhe users name
 * @param {string} phoneNumber The phone number
 */
export const actionPhoneBookEntryAdd = (name, phoneNumber) => ({
  type: PHONEBOOK_ENTRY_ADD,
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
  type: PHONEBOOK_SEARCH,
  payload: {
    searchTerm,
  },
});

// Reducer
const phoneBookReducer = (state = initialPhoneBookData, action) => {
  switch (action.type) {
    // case PHONEBOOK_GET_DATA:
    //   // Get the phonebook data
    //   state = deepCloneArray(initialPhoneBookData);
    //   break;

    case PHONEBOOK_ENTRY_ADD:
      // Clone the state.
      state = deepClone(state);
      // Add the New phone entry
      state.data = [...state.data,
        {
          name: action.payload.name,
          phoneNumber: action.payload.phoneNumber,
        },
      ];

      break;

    case PHONEBOOK_SEARCH:
      // Clone the state.
      state = deepClone(state);
      // Update the search term
      state.searchTerm = action.payload.searchTerm;

      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default phoneBookReducer;
