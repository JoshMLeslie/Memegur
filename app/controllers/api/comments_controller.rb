class Api::CommentsController < ApplicationController
  include VoteActions

  before_action :require_login

  def create
    postId = params[:post_id]
    comment = Comment.new(comment_params) #c_u => author_id
    comment.author_id = current_user.id
    comment.post_id ||= postId #'POST' to posts/:post_id/comments

    @post = comment.post # for the render, which passes instance vars (@var)
    comment.save ? (render "api/posts/show") : (render json: comment.errors.full_messages, status: 422)
  end

  def update
    # a comment will have an edit button which pulls the id for itself (params[:id] ? )
    @comment = current_user.comments.find(params[:id])

    @comment.update ? (render "api/comments/#{@comment.id}") : (render json: @comment.errors.full_messages, status: 422)
  end

  def destroy
    # a comment will have a delete button which pulls the id for itself (params[:id] ? )
    comment = current_user.comments.find(params[:id])
    comment.destroy

    @post = comment.post
    render "api/posts/show"
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
