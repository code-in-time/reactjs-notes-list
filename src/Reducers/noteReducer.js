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
 * The Note reducer.
 * This will hold all the data for notes.
 * @param {array} state
 * Example of how data will look.
 *  [{
 *   id: 4,
 *   text: 'this is text 4',
 *   selected: false,
 *   }],
 * @param {string} action the actions afre all found here 'actionTypes.js'
 */
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTE_CREATE:
      // A new note must be created
      // TODO: Still TODO
      console.log('actionTypes.NOTE_CREATE');
      // state = {
      //     ...state,
      //     name: action.payload
      // }
      break;

    case actionTypes.NOTE_SELECTED_CHANGE:
      // The selected property of the matched not must be toggled.
      console.log('actionTypes.NOTE_SELECTED_CHANGE');
      // TODO: Still TODO
      // state = {
      //     ...state,
      //     age: action.payload
      // }
      break;

    default:
      console.log('No actions match');
  }

  return state;
};

export default noteReducer;
