import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header_container';


export default class Post extends React.Component{

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render () {

    if (!this.props.currentPost) return null;

    return (
      <div id="post">
        <div className="filler" />
        <PostHeader
          currentPost={this.props.currentPost}
          author={this.props.author} />
        <img src="https://i.imgur.com/G6YUXcB.jpg"></img>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    );
  }
}
