import React from 'react';
import { timeDiff } from '../../util/pure_util';

export default class PostHeader extends React.Component{
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    const next = this.props.currentPost.id + 1;
    this.props.history.push(`/gallery/${next}`);
  }

  render () {
    const currentPost = this.props.currentPost || {};
    const title = currentPost.title || "";
    const author = this.props.author || "";

    return (
      <div id="post-header">
        <div id="post-header-left">
          <h2>{title}</h2>
          <span>by: <strong>{author.username}</strong>
            &nbsp;{timeDiff(currentPost.updated_at)} ago
          </span>
        </div>
        <div id="post-header-right">
          <button onClick={this.nextPage}>Next</button >
        </div>
      </div>
    );
  }
}
