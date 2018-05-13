import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import UploadModal from './upload_modal';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  processForm: (post) => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadModal));
