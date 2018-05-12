import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import ui from './ui_reducer';


export default combineReducers({
  ui,
  users,
  posts,
  comments
});
