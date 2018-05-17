import React from 'react';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';


export default class PostBody extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.lengthString = this.lengthString.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.postId).then(
      this.props.history.push(`/`)
    );
  }

  isAuthor () {
    return (this.props.currentPost.author_id === this.props.currentUser.id);
  }

  vote(vote) {
    let settings = {
      type: "posts",
      type_id: parseInt(this.props.postId),
      vote
    };
    this.props.createVote(settings);
  }

  lengthString () {
    const long = this.props.sumVotes;

    if (long !== 0) {
      const anS = (long > 1 || long < -1 ? "s" : "");
      return (`${long} Vote${anS}`);
    } else {
      return "0 Votes";
    }
  }

  render () {
    return (
      <div className="post-body">
        <div className="post-body-contents">
          <p>{this.props.body}</p>

          <div className={"flexed"}>
            <div>
              <label>{this.lengthString()}</label>
              <button onClick={() => this.vote(+1)}>
                <FaArrowCircleOUp className={"icons-block"} />
              </button>
              <button onClick={() => this.vote(-1)}>
                <FaArrowCircleODown className={"icons-block"} />
              </button>
            </div>

            <button
              className={this.isAuthor() ? "delete-btn" : "hidden"}
              onClick={this.handleDelete}>Delete!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
