import React from 'react';
import { timeDiff } from '../../util/pure_util';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    debugger
    this.props.removeComment(this.props.id); //?
  }

  render () {
    // const comments = this.props.list.map(())
    const body = this.props.postInfo.body;
    const author = this.props.author;
    return (
      <div className="comment">
        <div id="body">
          <label>{author.username}&nbsp;{timeDiff(author.updated_at)} ago</label>
          <p>{body}</p>
        </div>

        <button onClick={this.handleDelete}>Delete!</button>
      </div>
    );
  }

}
