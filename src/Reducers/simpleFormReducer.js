// Reducer
export default (state = { firstName: 'a', lastName: 'b' }, action) => {
  switch (action.type) {
    case 'resetForm':
      state = { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
      return state;
    default:
        // console.log('No actions match');
  }

  return state;
};
