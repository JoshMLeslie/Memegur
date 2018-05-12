import { OPEN_MODAL } from '../../actions/modal_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions';

import merge from 'lodash/merge';

const uiReducer = (state = null, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default uiReducer;
