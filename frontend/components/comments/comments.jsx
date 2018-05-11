import React from 'react';
import CommentItem from './comments_item_container';
// import CommentForm from './comments_form_container';

export default class Comments extends React.Component {

  render () {
    // <CommentForm />
    const comments = this.props.commentsList.map((id) => (
      <CommentItem key={id} id={id}/>
    ));

    return (
      <div id="comments">
        {comments}
      </div>
    );
  }

}
