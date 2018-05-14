import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SiteLogo from './site_logo';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, action) => {
  return ({
    currentUser: state.session.id
  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SiteLogo));
