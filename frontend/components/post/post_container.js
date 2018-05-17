import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../../actions/post_actions';
import { createVote } from '../../actions/vote_actions';
import Post from './post';
import isEmpty from 'lodash/isEmpty';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const currentPost = state.entities.posts[postId] || {};

  let author = {};
  let image_url =  "";
  let commentsList = [];

  if (!isEmpty(currentPost)) {
    let author_id = currentPost.author_id;
    author = state.entities.users[author_id];
    image_url = currentPost.image_url;
    commentsList = currentPost.comments_list;
  }

  return {
    postId,
    currentPost,
    author,
    image_url,
    commentsList,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
