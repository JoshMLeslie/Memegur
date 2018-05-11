import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comments_item';


const mapStateToProps = (state, ownProps) => {
  const postInfo = state.entities.comments[ownProps.id];
  return ({
    postInfo,
    author: state.entities.users[postInfo.author_id]
  });
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentItem));
