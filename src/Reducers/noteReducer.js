import actionTypes from '../constants/actionTypes';
import initialNoteData from '../data/initialNoteData';
import { deepCloneArray } from '../utils/general';

/**
 * ----------------------------------
 * The Note Reducer file.
 * ----------------------------------
 */

/**
 * This will toggle the seleced value of note that matches the ID that was passed.
 * Pass in a clone of the state and the note ID
 */

const toggleSelected = (clonedNotesState, id) => {
  const newNotes = clonedNotesState;
  const noteLength = newNotes.length;

  for (let i = 0; i < noteLength; i++) {
    // Check for the note that changed
    if (newNotes[i].id === id) {
      // This is the note that must be updated.
      // Update this note
      newNotes[i].selected = !newNotes[i].selected;
      // Exit the loop
      break;
    }
  }
  // Return the cloned array of notes
  return newNotes;
};

/**
 * The Note reducer.
 * This will hold all the data for notes.
 * @param {array} state
 * Example of how data will look.
 *  [{
 *   id: 4,
 *   text: 'this is text 4',
 *   selected: false,
 *   }],
 * @param {string} action the actions are all found here 'actionTypes.js'
 */
const noteReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.NOTE_CREATE:
      // A new note must be created
      // NOTE: action.payload -  will be the new note text
      state = [
        // Clone the state
        ...state,
        // Add the new note
        {
          // Add a new id from the time
          id: new Date().getTime(),
          text: action.payload,
          selected: false,
        }];
      break;

    case actionTypes.NOTE_SELECTED_TOGGLE:
      // The selected property of the matched not must be toggled
      // Pass in a clone of the state and the note ID
      // NOTE: action.payload -  will be the ID of the note.
      return toggleSelected([...state], action.payload);

    case actionTypes.NOTE_GET_LATEST:
      // Get the lastest notes
      // There is no payload
      // Doa  deep clone of the initial note data
      state = deepCloneArray(initialNoteData);
      break;

    case actionTypes.NOTE_CLEAR_ALL:
      // Clear all the notes
      // There is no payload
      state = [];
      break;

    default:
      console.log('No actions match');
  }

  return state;
};


export default noteReducer;
