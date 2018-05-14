import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header_container';
import Comments from '../comments/comments';
import isEmpty from 'lodash/isEmpty';


export default class Post extends React.Component{

  componentDidMount() {
    // currentPost is not yet defined => use 'postId'
    this.props.fetchPost(this.props.postId);
  }

  componentDidUpdate(prevProps, prevState){
    const postId = this.props.postId;

    if (postId !== prevProps.match.params.id) {
      this.props.fetchPost(postId);
    }
 }


  render () {

    const currentPost = this.props.currentPost;
    const commentsList = this.props.commentsList;

    // postId is passed thru 'comments' for 'comments_form'
    return (
      <div id="post">
        <div className="filler" />
        <PostHeader
          currentPost={currentPost}
          author={this.props.author} />

        <img
          src={this.props.image_url}/>

        <div id="post-footer">
          <div id="post-footer-body">
            {this.props.body}
          </div>
        </div >

        <Comments
          postId = {this.props.postId}
          commentsList={commentsList}
           />
      </div>
    );
  }
}
