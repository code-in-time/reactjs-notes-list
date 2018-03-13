import { apiMock } from '../API/';

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    payload: { hasErrored: bool },
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    payload: { isLoading: bool },
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
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
