import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Post from './post';


const mapStateToProps = (state, ownProps) => {
  debugger
  const postId = ownProps.match.params.id;
  return ({
    postId: postId,
    currentPost: state.entities.posts[postId],
    author: state.entities.users[ownProps.match.params.author],
    // author has
    // comments: state.entities.comments[postId] // will it return all matching? doesnt seem like the right way to do this
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchAuthor: (id) => dispatch(fetchAuthor(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
