class CommentsController < ApplicationController
  before_action :require_login

  def create
    postId = params[:post_id]

    @comment = current_user.comments.new(comment_params) #c_u => author_id
    @comment.post_id ||= postId #'POST' to posts/:post_id/comments

    @comment.save ? (render "api/posts/#{postId}") : (render json: @comment.errors.full_messages, status: 422)
  end

  def update
    # a comment will have an edit button which pulls the id for itself
    # qed params[:id]
    @comment = current_user.comments.find(params[:id])

    @comment.update ? (render "api/comments/#{@comment.id}") : (render json: @comment.errors.full_messages, status: 422)
  end

  def destroy
    # a comment will have a delete button which pulls the id for itself
    # qed params[:id]
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render "api/posts/#{@comment.post_id}"
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
