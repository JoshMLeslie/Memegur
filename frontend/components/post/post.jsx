import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header_container';


export default class Post extends React.Component{

  componentDidMount() {
    debugger
    this.props.fetchPost(this.props.postId)
  }

  render () {
    debugger
    if (!this.props.currentPost) return null;

    return (

      <div>
        <PostHeader postInfo={postInfo}/>
        <img src="https://i.imgur.com/G6YUXcB.jpg"></img>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    );
  }
}
