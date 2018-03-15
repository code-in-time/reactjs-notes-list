/**
 * This is so that the user can login
 * This is thunk action
 * This will dispatch other actions
 */
export function LoginAPICall() {
  // NOTE getState is an options param
  // return (dispatch, getState) => {
  return (dispatch) => {
    // The API must show that is is loading
    // dispatch(authLoginIsLoading(true));
    // Add API CALL
    apiLogin()
      .then((res) => {
        console.log('data is returned');
        return res.data;
      })
      .then((data) => {
        //dispatch(authLoginSuccessWithData(data));
      })
      .catch(() => {
        //dispatch(authLoginEror(true, 'error test'));
      })
      .finally(() => {
        //dispatch(authLoginIsLoading(false));
        //dispatch(authLoginDialogOpen(false));
        console.log('finally');
      });
  };
}
