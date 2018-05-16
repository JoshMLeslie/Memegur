import React from 'react';
import CommentItem from './comments_item_container';
import CommentForm from './comments_form_container';

export default class Comments extends React.Component {

  lengthString () {
    const list = this.props.commentsList || [];
    const long = list.length;

    if (long > 0) {
      const anS = (long > 1 ? "s" : "");
      return (`${long} Comment${anS}`);
    } else if (long === 0) {
      return "0 Comments";
    }
  }

  render () {
    const comments = [];
    const commentsList = this.props.commentsList || [];
    commentsList.map((id) => (
      comments.unshift(<CommentItem key={id} id={id}/>)
    ));
    // unshift comments to show newest first.


    return (
      <div className="post-comments">
        <CommentForm postId={this.props.postId}/>

        <div id="comment-counter">
          <p>
            {this.lengthString.bind(this)()}
          </p>
        </div>

        {comments}
      </div>
    );
  }

}
