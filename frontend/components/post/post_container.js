import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login, logout } from '../../actions/session_actions';
import { fetchPost } from '../../actions/post_actions';
import Post from './post';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return ({
    postId,
    currentPost: state.entities.posts[postId],
    author: state.entities.users[postId],
    // comments: state.entities.comments[postId] // will it return all matching? doesnt seem like the right way to do this
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
