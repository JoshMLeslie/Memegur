import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';

import merge from 'lodash/merge';
import { insert } from '../../util/pure_util';
// insert(element, array) => new array


const postTrackingReducer = (state, action) => {
  state = state || {ids: [0], topId: 0};
  let ids;
  let newState;

  switch(action.type) {

    case RECEIVE_POST:
      const thisId = parseInt(Object.keys(action.payload.post));
      const newIds = insert(thisId, state.ids); // returns a new array
      newState = merge({}, state, {ids: newIds});

      return (thisId > newState.topId) ?
      merge(newState, {topId: thisId}) :
      newState;

    case RECEIVE_POSTS:
      // pull post IDs from ajax response, strings (?) => map to integers
      ids = Object.keys(action.posts).map(id => parseInt(id));
      ids = ids.sort( (a,b) => (a > b) );  // ensure ordering

      const topId = ids[ids.length - 1];     // pull highest ID
      return merge({}, state, {ids, topId});

    case REMOVE_POST:
      // make new state obj regardless
      // filter out old ID from newState
      // check if the new topId can replace the old top,
      // return relative newState
      newState = merge({}, state);
      newState.ids = newState.ids.filter(id => id !== parseInt(action.id));
      const newTopId = newState.ids[newState.ids.length - 1];

      if (newTopId > newState.topId) {
        return merge(newState, {topId: newTopId});
      } else {
        return newState;
      }
      break; // linters, man.
    default:
      return state;
  }
};

export default postTrackingReducer;
