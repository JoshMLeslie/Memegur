import {
  RECEIVE_ADMIN
} from '../../actions/user_actions';

import merge from 'lodash/merge';

const adminReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ADMIN: // load admin into state
      return merge({}, action.admin);
    default:
      return state;
  }
};

export default adminReducer;
