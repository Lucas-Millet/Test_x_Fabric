// action type UPDATE_USER_INFO
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// action creator updateUserInfo
export const updateUserInfo = (value,name) => ({
  type: UPDATE_USER_INFO,
  value,
  name,
});

// action type RESET_USER_INFO
export const RESET_USER_INFO = 'RESET_USER_INFO';

// action creator resetUserInfo
export const resetUserInfo = () => ({
  type: RESET_USER_INFO,
});
