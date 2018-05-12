import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comments_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) => {
  const postInfo = state.entities.comments[ownProps.id];
  return ({
    postInfo,
    author: state.entities.users[postInfo.author_id]
  });
};

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  removeComment: id => dispatch(deleteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentItem));
