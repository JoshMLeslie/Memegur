import React from 'react';
import { Link } from 'react-router-dom';
import { timeDiff } from '../../util/pure_util';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      sideVote: "hidden-vote"
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.showVoter = this.showVoter.bind(this);
    this.hideVoter = this.hideVoter.bind(this);
    this.isAuthor = this.isAuthor.bind(this);
  }

  handleDelete() {
    this.props.removeComment(this.props.id);
  }

  showVoter() {
    // showVoter => 'side-vote'
    this.setState({sideVote: "side-vote"});
  }

  hideVoter() {
    // hideVoter => 'hidden-vote'
    this.setState({sideVote: "hidden-vote"});
  }

  vote(vote) {
    let settings = {
      type: "comments",
      type_id: parseInt(this.props.id),
      vote
    };
    this.props.createVote(settings);
  }

  isAuthor () {
    return (this.props.author.id === this.props.currentUser.id);
  }

  render () {
    const commentInfo = this.props.commentInfo;
    const body = commentInfo.body || "";
    const author = this.props.author || "";
    return (
      <section
        onMouseEnter={this.showVoter}
        onMouseLeave={this.hideVoter} >

        <div id="comment">
          <div id={this.state.sideVote}>
            <div>
              <button onClick={() => this.vote(+1)}>
                <FaArrowCircleOUp className={"icons-block"} />
              </button>
              <button onClick={() => this.vote(-1)}>
                <FaArrowCircleODown className={"icons-block"} />
              </button>
            </div>
            <p>{this.props.sumVotes}</p>
          </div>

          <div id="body">
            <label>
              <Link to={`/users/${author.id}`}> {author.username}</Link>
              &nbsp;{timeDiff(commentInfo.updated_at)} ago</label>
            <p>{body}</p>

            <button className={this.isAuthor() ? "delete-btn" : "hidden"} onClick={this.handleDelete}>Delete!</button>
          </div>
        </div>
      </section>
    );
  }

}
