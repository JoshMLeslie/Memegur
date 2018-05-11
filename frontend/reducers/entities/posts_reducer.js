import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POSTS:
      return merge( {}, action.posts );
    case RECEIVE_POST:
      const id = Object.keys(action.payload.post);
      return merge({}, state, { [id]: action.payload.post});
    case REMOVE_POST:
      const newState = merge( {}, state );
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
