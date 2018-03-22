/* log called actions */
export default ({ dispatch }) => next => (action) => {
  console.log('ACTION CALLLED: ', action.type, ' with payload: ', action.payload);
  next(action);
};
