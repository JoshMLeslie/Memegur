import * as PostAPI from '../util/post_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});
const receivePost = (payload) => ({
  type: RECEIVE_POST,
  payload
});
const removePost = (id) => ({
    type: REMOVE_POST,
    id
  });

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const fetchPosts = () => dispatch => {
  // preserving one long-form for posterity
  PostAPI.fetchPosts().then(
    posts => {
      return (
        dispatch(receivePosts(posts))
      );
    },
    error => {
      return ( dispatch(receiveErrors(error.responseJSON)) );
    }
  );
};

export const fetchPost = (id) => dispatch => {
  PostAPI.fetchPost(id).then(
    payload => ( dispatch(receivePost(payload)) ),
    error => ( dispatch(receiveErrors(error.responseJSON)) )
  );
};

export const createPost = (post, callback) => dispatch => {
  return PostAPI.createPost(post, callback).then(
    post => ( dispatch(receivePost(post)) ),
    error => ( dispatch(receiveErrors(error.responseJSON)) )
  );
};

export const updatePost = (post) => dispatch => {
  PostAPI.updatePost(post).then(
    post => ( dispatch(receivePost(post)) ),
    error => ( dispatch(receiveErrors(error.responseJSON)) )
  );
};

export const deletePost = (id) => dispatch => {
  PostAPI.deletePost(id).then(
    () => ( dispatch(removePost(id)) ),
    error => ( dispatch(receiveErrors(error.responseJSON)) )
  );
};
