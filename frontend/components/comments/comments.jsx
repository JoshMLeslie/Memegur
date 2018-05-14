import React from 'react';
import CommentItem from './comments_item_container';
import CommentForm from './comments_form_container';

export default class Comments extends React.Component {

  render () {
    const comments = [];
    this.props.commentsList.map((id) => (
      comments.unshift(<CommentItem key={id} id={id}/>)
    ));
    // unshift comments to show newest first.

    return (
      <div id="post-comments">
        <CommentForm postId={this.props.postId}/>

        <div id="comment-counter">
          <p>
            {this.props.commentsList.length} Comments
          </p>
        </div>

        {comments}
      </div>
    );
  }

}
