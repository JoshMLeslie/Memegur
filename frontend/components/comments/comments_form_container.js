import { connect } from 'react-redux';
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import CommentForm from './comments_form';
// this is a comment form container

const mapStateToProps = (state, ownProps) => {
  const text = ownProps.body || "";
  return ({
    text
  });
};

const mapDispatchToProps = dispatch => {
  return ({
      createComment: (post_id, body) => dispatch(createComment(post_id, body))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
