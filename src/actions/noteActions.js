import actionTypes from '../constants/actionTypes';

export const actionNoteCreate = text => ({
  type: actionTypes.NOTE_CREATE,
  payload: text,
});

export const actionNoteSelectedToggle = ID => ({
  type: actionTypes.NOTE_SELECTED_TOGGLE,
  payload: ID,
});

export const actionNoteGetLatest = () => ({
  type: actionTypes.NOTE_GET_LATEST,
});

export const actionNoteClearAll = () => ({
  type: actionTypes.NOTE_CLEAR_ALL,
});
