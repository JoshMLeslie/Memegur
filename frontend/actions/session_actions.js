import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    User
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

export const fetchAuthor = (id) => dispatch => {
  SessionAPI.fetchAuthor(id).then(
    user => {
      return (
        dispatch(receiveUser(user))
      );
    },
    error => {
      return (
        dispatch(receiveErrors(error.responseJSON))
      );}
  );
};
