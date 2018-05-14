import * as UserAPI from '../util/user_api_util'; //?

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveUser = payload => {
  return ({
    type: RECEIVE_USER,
    payload
  });
};

const receiveUsers = users => {
  return ({
    type: RECEIVE_USERS,
    users
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const fetchUser = (id) => dispatch => {
  return UserAPI.fetchUser(id).then(
    payload => {
      return (
        dispatch(receiveUser(payload))
      );
    },
    error => {
      return (
        dispatch(receiveErrors(error.responseJSON))
      );}
  );
};
export const fetchUsers = () => dispatch => {
  return UserAPI.fetchUsers().then(
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
