import actionTypes from '../constants/actionTypes';
import { deepClone } from '../utils/general';

const defaultState = {
  items: [],
  hasErrored: false,
  isLoading: false,
};

const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ITEMS_IS_LOADING:
      state = deepClone(state);
      state.isLoading = action.payload.isLoading;

      break;

    case actionTypes.ITEMS_HAS_ERRORED:
      state = deepClone(state);
      state.isLoading = action.payload.hasErrored;

      break;

    case actionTypes.ITEMS_FETCH_DATA_SUCCESS:
      state = deepClone(state);
      state.items = action.payload.items;

      break;

    default:
      console.log('No actions match');
  }
  console.log('itemsReducer', [state, action]);
  return state;
};

export default itemsReducer;
