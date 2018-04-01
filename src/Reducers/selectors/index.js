/**
 * SELECTOR
 */
// Phone book selector
export const selectorPhoneBookGetFirstNameNumber = (state) => {
  const firstEntry = state.phoneBookReducer.data[0];
  const tmpl = `${firstEntry.name} ${firstEntry.phoneNumber} and more text`;
  return tmpl;
};

// Get the logged in user
export const selectorGetTheLoggedInUser = (state) => {
  const data = state.authReducer.profileData;

  return `${data.name} = ${data.email} = ${data.mobile}`;
};
