import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';

import merge from 'lodash/merge';
import { insert } from '../../util/pure_util';
// insert(element, sortedArray) => new srtArray //=> (2, [1,3]) => [1,2,3]


const postTrackingReducer = (state, action) => {
  state = state || {ids: [0]}; // ,topId: 0 // TOP-INDEX-ID
  let ids;
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_POST:
      const thisId = parseInt(Object.keys(action.payload.post));

      if (!state.ids.includes(thisId)) {
        newState.ids = insert(thisId, state.ids); // non-mutating Fn()
      } // else don't change anything.

      // TOP-INDEX-ID
      // if (thisId > newState.topId) {
      //   newState = merge(newState, {topId: thisId});
      // }

      return newState;

    case RECEIVE_POSTS:
      // pull post IDs from ajax response, strings (?) => map to integers
      ids = Object.keys(action.posts).map(id => parseInt(id));
      newState.ids = ids.sort( (a,b) => (a - b) );
      // ensure ordering // who makes a sort like this?

      // const topId = ids[ids.length - 1];     // pull highest ID
      return newState;

    case REMOVE_POST:
      // make new state obj regardless
      // filter out old ID from newState
      // check if the new topId can replace the old top,
      // return relative newState

      newState.ids = newState.ids.filter(id => id !== parseInt(action.id));
      return newState;
      // TOP-INDEX-ID
      // const newTopId = newState.ids[newState.ids.length - 1];
      //
      // if (newTopId > newState.topId) {
      //   return merge(newState, {topId: newTopId});
      // } else {
      //   return newState;
      // }
      // break; // linters, man.
    default:
      return state;
  }
};

export default postTrackingReducer;
