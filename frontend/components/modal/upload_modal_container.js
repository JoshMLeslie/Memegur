import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import UploadModal from './upload_modal';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: (post) => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadModal));
