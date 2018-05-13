import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header_container';
import Comments from '../comments/comments';


export default class Post extends React.Component{

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  componentDidUpdate(prevProps, prevState){
    const postId = this.props.postId;
    
    if (postId !== prevProps.match.params.id) {
      this.props.fetchPost(postId);
    }
 }

  render () {
    if (!this.props.currentPost) return null;

    const currentPost = this.props.currentPost;
    const commentsList = this.props.commentsList;

    return (
      <div id="post">
        <div className="filler" />
        <PostHeader
          currentPost={currentPost}
          author={this.props.author} />
        <img src={this.props.image_url}></img>
        <Comments
          postId = {currentPost.id}
          commentsList={commentsList}
           />
      </div>
    );
  }
}

// postId is passed down for 'form'
