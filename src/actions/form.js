// action type CLOSE_SIGN_IN
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// action creator closeSignIn
export const updateUserInfo = (value,name) => ({
  type: UPDATE_USER_INFO,
  value,
  name,
});
