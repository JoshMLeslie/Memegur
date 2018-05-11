import {
  RECEIVE_POST
} from '../../actions/post_actions';

import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../../actions/comment_actions';

import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POST:
      // add all comments of a post to State
      return merge({}, state, action.payload.comments);
    case RECEIVE_COMMENT:
      // add the single comment to State
      return merge({}, state, { [action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      const newState = merge( {}, state );
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
