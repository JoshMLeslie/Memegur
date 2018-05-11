import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER
} from '../../actions/session_actions';
import { RECEIVE_POST } from '../../actions/post_actions';
import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_POST:// same action?
    const id = Object.keys(action.payload.users);
      return merge({}, state, { [id]: action.payload.users});
    // case RECEIVE_USER:
    default:
      return state;
  }
};

export default userReducer;
