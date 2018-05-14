import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';
import {
  RECEIVE_USER
} from '../../actions/user_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return merge( {}, action.posts );
    case RECEIVE_POST: case RECEIVE_USER:
      return merge({}, state, action.payload.post);
     // load a post / single user's posts into state
    case RECEIVE_COMMENT:
    case REMOVE_POST:
      const newState = merge( {}, state );
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
