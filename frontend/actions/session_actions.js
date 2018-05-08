import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// debugger;
// check the 'error' const is working properly, whenever you actually hit here 180507
// update: still not totally sure. Didn't test too thoroughly. Will circle back whenever it shows up again. 180507


export const signup = (user) => dispatch => {
  SessionAPI.signup(user).then(
    user => {
      return (
        dispatch(receiveCurrentUser(user))
      );
    },
    error => {
      return (
        dispatch(receiveErrors(error.responseJSON))
      );}
  );
};

export const login = (user) => dispatch => {
  SessionAPI.login(user).then(
    user => {
      return (
        dispatch(receiveCurrentUser(user))
      );
    },
    error => {
      return (
        dispatch(receiveErrors(error.responseJSON))
      );}
  );
};

export const logout = (user) => dispatch => {
  SessionAPI.logout(user).then(
    () => { return (dispatch(logoutCurrentUser ()) ); }
  );
};

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};
