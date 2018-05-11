import React from 'react';

export default class PostHeader extends React.Component{


  nextPage() { return window.alert("nothing yet"); }



  render () {
    const title = this.props.currentPost.title;
    const author = this.props.author;

    return (
      <div id="post-header">
        <div id="post-header-left">
          <h2>{title}</h2>
          <h4>by: {author.username}</h4>
        </div>
        <div id="post-header-right">
          <button id="post-header-next" onClick={this.nextPage}>Next-N.F.</button >
        </div>
      </div>
    );
  }
}
