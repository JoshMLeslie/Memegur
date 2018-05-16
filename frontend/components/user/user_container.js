import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import User from './user';
import merge from 'lodash/merge';

const getEnts = (userId, checkEnts) => {

  let ents = {};

  for (var key in checkEnts) {
    if (checkEnts[key].author_id == userId) {
      merge(ents, {[key]: checkEnts[key]} );
      // filtered and rebuilt json, basically.
    }
  }
  return ents;
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const userId = ownProps.match.params.id;

  let user = {title: "user"};
  let comments = {title: "comments"};
  let posts = {title: "posts"};

  if (userId) { // make fresh copies just in case?
    user = merge( {}, user, state.entities.users[userId] );
    comments = merge( {}, comments, getEnts(userId, state.entities.comments) );
    posts = merge( {}, posts, getEnts(userId, state.entities.posts) );
  }

  const entities = [
    comments,
    posts,
  ] || [];

  return ({
    user,
    currentUser,
    userId,
    entities
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
