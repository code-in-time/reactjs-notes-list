import actionTypes from '../actionTypes';

/**
 * ----------------------------------
 * The Note Reducer file.
 * ----------------------------------
 */

/**
 * The initial state for the noteReducer
 */
const initialState = [
  {
    id: 1,
    text: 'this is text 1',
    selected: false,
  },
  {
    id: 2,
    text: 'this is text 2',
    selected: false,
  },
  {
    id: 3,
    text: 'this is text 3',
    selected: false,
  },
  {
    id: 4,
    text: 'this is text 4',
    selected: false,
  },
];


/**
 * This will toggle the seleced value of note that matches the ID that was passed.
 * Pass in a clone of the state and the note ID
 */
const toggleSelected = (clonedNotes, id) => {
  const newNotes = clonedNotes;
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
const noteReducer = (state = initialState, action) => {
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

    default:
      console.log('No actions match');
  }

  return state;
};

export default noteReducer;
