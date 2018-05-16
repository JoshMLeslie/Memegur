import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createVote } from '../../actions/vote_actions';
import { deletePost } from '../../actions/post_actions';
import PostBody from './post_body';
import isEmpty from 'lodash/isEmpty';


const mapStateToProps = (state, ownProps) => {
  let currentPost = ownProps.currentPost;
  let body = "";
  let sumVotes = 0;

  if (!isEmpty(currentPost)) {
    body = currentPost.body;

    let votes = state.entities.votes;
    for (let key in state.entities.votes) {
      if (
        votes[key].votable_id === currentPost.id &&
        votes[key].votable_type === "Post"
      ) {
        sumVotes += votes[key].vote;
      }
    }
  }

  return ({
    currentPost, body, sumVotes
  });
};

const mapDispatchToProps = dispatch => ({
  createVote: (settings) => dispatch(createVote(settings) ),
  removePost: (settings) => dispatch(deletePost(settings) )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostBody));
