import initialNoteData from '../data/initialNoteData';
import { deepClone } from '../utils/general';

// Actions
export const NOTE_CREATE = 'NOTE_CREATE';
export const NOTE_SELECTED_TOGGLE = 'NOTE_SELECTED_TOGGLE';
export const NOTE_GET_LATEST = 'NOTE_GET_LATEST';
export const NOTE_CLEAR_ALL = 'NOTE_CLEAR_ALL';

// Action creators
export const actionNoteCreate = text => ({
  type: NOTE_CREATE,
  payload: text,
});

export const actionNoteSelectedToggle = ID => ({
  type: NOTE_SELECTED_TOGGLE,
  payload: ID,
});

export const actionNoteGetLatest = () => ({
  type: NOTE_GET_LATEST,
});

export const actionNoteClearAll = () => ({
  type: NOTE_CLEAR_ALL,
});

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
    case NOTE_CREATE:
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

    case NOTE_SELECTED_TOGGLE:
      // The selected property of the matched note must be toggled
      // Pass in a clone of the state and the note ID
      // NOTE: action.payload -  will be the ID of the note.
      return toggleSelected([...state], action.payload);

    case NOTE_GET_LATEST:
      // Get the lastest notes
      // There is no payload
      // Doa  deep clone of the initial note data
      state = deepClone(initialNoteData);
      break;

    case NOTE_CLEAR_ALL:
      // Clear all the notes
      // There is no payload
      state = [];
      break;

    default:
      // console.log('No actions match');
  }

  return state;
};

export default noteReducer;
