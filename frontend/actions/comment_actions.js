import * as CommentAPI from '../util/comment_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; // placeholder

const receivePost = (payload) => ({
  type: RECEIVE_POST,
  payload
});

const removeComment = (payload, id) => ({
    type: REMOVE_COMMENT,
    payload,
    id
  });

const receiveErrors = (errors) => { // placeholder
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};


export const createComment = (post_id, comment) => dispatch => {
  return CommentAPI.createComment(post_id, comment).then(
    post => {
      return (
        dispatch(receivePost(post))
      );
    }
  );
};

export const updateComment = comment => dispatch => {
  return CommentAPI.updateComment(comment).then(
    post => {
      return (
        dispatch(receivePost(post))
      );
    }
  );
};
export const deleteComment = id => dispatch => {
  return CommentAPI.deleteComment(id).then(
    (payload) => {
      return (
        dispatch(removeComment(payload, id))
      );
    }
  );
};
