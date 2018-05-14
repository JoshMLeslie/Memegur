import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../../actions/user_actions';
import { RECEIVE_POST } from '../../actions/post_actions';

import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_USER: // load a single user into state
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    case RECEIVE_USERS: // load multiple users into state
      return merge({}, state, action.users);
    case RECEIVE_POST:
      // load multiple users into state triggered by a post loading
      return merge({}, state, action.payload.users );
    default:
      return state;
  }
};

export default userReducer;
