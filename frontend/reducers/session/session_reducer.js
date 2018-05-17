import { combineReducers } from 'redux';
import postTracking from './post_tracking_reducer';
import currentUser from './current_user_reducer';

export default combineReducers({
  postTracking,
  currentUser
});
