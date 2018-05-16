import {
  RECEIVE_POST
} from '../../actions/post_actions';
import {
  REMOVE_VOTE
} from '../../actions/vote_actions';

import merge from 'lodash/merge';

const votesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_POST:
      // add all comments of a post/user to State
      return merge({}, state, action.payload.votes);
    case REMOVE_VOTE:
      const newState = merge( {}, state );
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default votesReducer;
