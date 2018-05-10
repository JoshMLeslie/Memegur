import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header_container';


export default class Post extends React.Component{

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }

  render () {
    if (!this.props.currentPost) return null;
    const post = this.props.currentPost;
    const author = this.props.author;
debugger
    return (

      <div>
        <PostHeader postInfo={post, author}/>
        <img src="https://i.imgur.com/G6YUXcB.jpg"></img>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </div>
    );
  }
}
