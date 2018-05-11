import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login, logout } from '../../actions/session_actions';
import { fetchPost } from '../../actions/post_actions';
import Post from './post';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const currentPost = state.entities.posts[postId];

  let author = "";
  if (currentPost) {
     author = state.entities.users[currentPost.author_id];
  } else {
    author = "null";
  }

  return ({
    postId,
    currentPost,
    author,
    commentsList: Object.keys(state.entities.comments)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
