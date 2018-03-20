import {
  itemsHasErrored,
  ITEMS_HAS_ERRORED,
  itemsIsLoading,
  ITEMS_IS_LOADING,
  itemsFetchDataSuccess,
  ITEMS_FETCH_DATA_SUCCESS,

} from './itemsReducer';

describe('actions', () => {
  it('should create an action to change the error bool', () => {
    const bool = true;
    const expectedAction = {
      type: ITEMS_HAS_ERRORED,
      payload: { hasErrored: bool },
    };
    expect(itemsHasErrored(bool)).toEqual(expectedAction);
  });

  it('should create an action change the loading bool', () => {
    const bool = true;
    const expectedAction = {
      type: ITEMS_IS_LOADING,
      payload: { isLoading: bool },
    };
    expect(itemsIsLoading(bool)).toEqual(expectedAction);
  });

  it('should create an action with the data items', () => {
    const items = [];
    const expectedAction = {
      type: ITEMS_FETCH_DATA_SUCCESS,
      payload: { items },
    };
    expect(itemsFetchDataSuccess([])).toEqual(expectedAction);
  });
});
