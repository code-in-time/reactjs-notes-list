import { apiMock } from '../API/';
import { deepClone } from '../utils/general';

// The actions
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

// The action creators
export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    payload: { hasErrored: bool },
  };
}

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    payload: { isLoading: bool },
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    payload: { items },
  };
}

export function itemsFetchData() {
  return (dispatch, getState) => {
    console.log('getstate', getState());
    // Add API CALL
    apiMock()
      .then((res) => {
        dispatch(itemsIsLoading(true));
        return res.data;
      })
      .then((data) => {
        dispatch(itemsFetchDataSuccess(data));
      })
      .catch(() => {
        dispatch(itemsHasErrored(true));
      })
      .finally(() => {
        dispatch(itemsIsLoading(false));
        console.log('finally');
      });
  };
}

// The default state
const defaultState = {
  items: [],
  hasErrored: false,
  isLoading: false,
};

// The items reducer
const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      state = deepClone(state);
      state.isLoading = action.payload.isLoading;

      break;

    case ITEMS_HAS_ERRORED:
      state = deepClone(state);
      state.isLoading = action.payload.hasErrored;

      break;

    case ITEMS_FETCH_DATA_SUCCESS:
      state = deepClone(state);
      state.items = action.payload.items;

      break;

    default:
      // console.log('No actions match');
  }
  return state;
};

export default itemsReducer;
