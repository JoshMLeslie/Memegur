import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return ({
    modal: state.ui.modal
  });
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
