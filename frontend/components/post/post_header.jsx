import React from 'react';
import { timeDiff } from '../../util/pure_util';

export default class PostHeader extends React.Component{
  constructor(props) {
    super(props);
  }

  nextPage() { return window.alert("nothing yet"); }

  render () {
    const title = this.props.currentPost.title;
    const author = this.props.author;

    return (
      <div id="post-header">
        <div id="post-header-left">
          <h2>{title}</h2>
          <span>by: <strong>{author.username}</strong>
            &nbsp;{timeDiff(author.updated_at)} ago
          </span>
        </div>
        <div id="post-header-right">
          <button id="post-header-next" onClick={this.nextPage}>Next-N.F.</button >
        </div>
      </div>
    );
  }
}
