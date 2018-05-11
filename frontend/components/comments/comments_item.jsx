import React from 'react';


export default class CommentItem extends React.Component {


  render () {
    // const comments = this.props.list.map(())
    const body = this.props.postInfo.body;
    const author = this.props.author;
    debugger
    return (
      <div className="comment">
        <label>{author}</label>
        <p>{body}</p>
      </div>
    );
  }

}
