import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PostHeader from './post_header';
import {signup, login, logout} from '../../actions/session_actions';
import { fetchPost } from '../../actions/post_actions';
import { fetchAuthor } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentPost: ownProps.match.params.currentPost,
    author: ownProps.match.params.author,
    // author has id, username, etc.

    // comments: state.entities.comments[postId] // will it return all matching? doesnt seem like the right way to do this
  });
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostHeader));
