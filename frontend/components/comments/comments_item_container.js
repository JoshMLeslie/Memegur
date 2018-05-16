import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comments_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import { createVote } from '../../actions/vote_actions';
import isEmpty from 'lodash/isEmpty';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const commentInfo = state.entities.comments[ownProps.id];
  const author = state.entities.users[commentInfo.author_id] || {};

  let sumVotes = 0;

  if (!isEmpty(commentInfo)) {
    let votes = state.entities.votes;
    for (let key in state.entities.votes) {
      if (
        votes[key].votable_id === ownProps.id &&
        votes[key].votable_type === "Comment"
      ) {
        sumVotes += votes[key].vote;
      }
    }
  }

  return ({
    currentUser,
    commentInfo,
    sumVotes,
    author
  });
};

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  removeComment: id => dispatch(deleteComment(id)),
  createVote: (settings) => dispatch(createVote(settings) )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentItem));
