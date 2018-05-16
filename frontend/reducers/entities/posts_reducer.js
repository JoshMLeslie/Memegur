import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';
import {
  RECEIVE_USER
} from '../../actions/user_actions';
import {
  REMOVE_COMMENT
} from '../../actions/comment_actions';

import merge from 'lodash/merge';

let newState;

const postsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return merge( {}, action.posts );
    case RECEIVE_POST: case RECEIVE_USER:
      return merge({}, state, action.payload.post);
     // load a post / single user's posts into state
    case REMOVE_COMMENT:
      newState = merge( {}, state );
      const post = newState[Object.keys(action.payload.post)];

      // explicitly remove the comment from the post's state
      post.comments_list = post.comments_list.filter(
        id => id !== action.id
      );

      return newState;
    case REMOVE_POST:
      newState = merge( {}, state );
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
