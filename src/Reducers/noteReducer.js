import actionTypes from '../actionTypes';

const noteReducer = (
  state = {
    [
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
      ]
  },
  action,
) => {
  switch (action.type) {
    case actionTypes.NOTE_CREATE:
      console.log('actionTypes.NOTE_CREATE');
      // state = {
      //     ...state,
      //     name: action.payload
      // }
      break;

    case actionTypes.NOTE_SELECTED_CHANGE:
      console.log('actionTypes.NOTE_SELECTED_CHANGE');
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
