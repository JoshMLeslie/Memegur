import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../../actions/post_actions';
import Post from './post';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const currentPost = state.entities.posts[postId];

  let author = {};
  let image_url =  "";
  let commentsList = [];
  let body = "";

  if (currentPost) {
    author = state.entities.users[currentPost.author_id];
    image_url = currentPost.image_url;
    commentsList = currentPost.comments_list;
    body = currentPost.body;
  }

  return ({
    postId, currentPost, author, image_url,
    commentsList, body,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
