class Api::PostsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @posts = Post.all

    render "api/posts/index"
  end

  def create
    @post = current_user.posts.new(post_params)

    @post.save ? (render :show) : (render json: @post.errors.full_messages, status: 422)
  end

  def show
    @post = Post.find(params[:id])

    @post ? (render :show) : (render json: @post.errors.full_messages, status: 422)
  end

  def update
    @post = current_user.posts.find(params[:id])

    @post.update ? (render :show) : (render json: @post.errors.full_messages, status: 422)
  end

  def destroy
    @post = current_user.posts.find(params[:id])

    @post.destroy
    # may need to change to point to '/' instead?
    # render status: 200
  end

  def post_params
    params.require(:post).permit(:body,:title,:image)
  end

end
