export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"; //post query
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"; // comment create
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; // placeholder


const receiveComments = (posts) => ({
  type: RECEIVE_COMMENTS,
  posts
});
const receiveComment = (payload) => ({
  type: RECEIVE_COMMENT,
  payload
});
const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id
  });

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

// export const fetchComments // ??
