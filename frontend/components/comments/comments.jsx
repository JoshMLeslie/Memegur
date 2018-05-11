import React from 'react';
import Comment from './comments_item';
import CommentForm from './comments_form_container';

export default class Comments extends React.Component {


  render () {

    return (
      <div id="comments">
        <CommentForm />
        <Comments />
      </div>
    );
  }

}
