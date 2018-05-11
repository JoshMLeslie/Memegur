import * as SessionAPI from '../util/session_api_util'; //?

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  });
};

export const receiveUsers = users => {
  return ({
    type: RECEIVE_USERS,
    users
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
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
export const fetchAuthors = (ids) => dispatch => {
  SessionAPI.fetchAuthors(ids).then(
    user => {
      return (
        dispatch(receiveUsers(users))
      );
    },
    error => {
      return (
        dispatch(receiveErrors(error.responseJSON))
      );}
  );
};
