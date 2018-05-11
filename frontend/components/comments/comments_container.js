import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from './comments';


const mapStateToProps = (state, ownProps) => {
  return ({
    postId: ownProps.postInfo.post_id,
    author: ownProps.postInfo.user_id,
  });
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
