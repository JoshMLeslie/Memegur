import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import User from './user';
import merge from 'lodash/merge';

const getEnts = (userId, checkEnts) => {
  let ents = {};

  for (var key in checkEnts) {
    if (checkEnts[key].author_id === userId) {
      merge(ents, checkEnts[key]);
    }
  }

  return ents;
};

const mapStateToProps = (state) => {
  const userId = ownProps.match.params.id;

  let comments = {};
  let posts = {};
  
  if (userId) {
    comments = getEnts(userId, state.entities.comments);
    posts = getEnts(userId, state.entities.posts);

  }


  return ({
    user: state.entities.users[userId],
    comments,

  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: (id) => dispatch(fetchPosts(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
