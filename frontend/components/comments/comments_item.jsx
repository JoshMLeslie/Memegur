import React from 'react';
import { timeDiff } from '../../util/pure_util';

export default class CommentItem extends React.Component {


  render () {
    // const comments = this.props.list.map(())
    const body = this.props.postInfo.body;
    const author = this.props.author;
    return (
      <div className="comment">
        <label>{author.username}&nbsp;{timeDiff(author.updated_at)} ago</label>
        <p>{body}</p>
      </div>
    );
  }

}
