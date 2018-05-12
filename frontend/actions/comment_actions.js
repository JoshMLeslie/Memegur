import * as CommentAPI from '../util/comment_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"; // comment create
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; // placeholder

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id
  });

const receiveErrors = (errors) => { // placeholder
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};


export const createComment = (post_id, comment) => dispatch => {
  debugger
  CommentAPI.createComment(post_id, comment).then(
    comment => {
      return (
        dispatch(receiveComment(comment))
      );
    }
  );
};

export const updateComment = comment => dispatch => {
  CommentAPI.updateComment(comment).then(
    comment => {
      return (
        dispatch(receiveComment(comment))
      );
    }
  );
};
export const deleteComment = id => dispatch => {
  CommentAPI.deleteComment(id).then(
    () => {
      return (
        dispatch(removeComment(id))
      );
    }
  );
};
