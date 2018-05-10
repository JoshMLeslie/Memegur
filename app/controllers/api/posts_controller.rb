class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render "api/posts/index"
  end

  def create
    @post = current_user.posts.new(post_params)

    @post.save ? (render "api/posts/#{@post.id}") : r(ender json: @post.errors.full_messages, status: 422)
  end

  def show
    @post = current_user.posts.find(params[:id])

    @post ? (render "api/posts/#{@post.id}") : (render json: @post.errors.full_messages, status: 422)
  end

  def update
    @post = current_user.posts.find(params[:id])

    @post.update ? (render "api/posts/#{@post.id}") : (render json: @post.errors.full_messages, status: 422)
  end

  def destroy
    @post = current_user.posts.find(params[:id])

    @post.destroy
    # may need to change to point to '/' instead?
    render "api/posts/"
  end

  def post_params
    params.require(:post).permit(:body,:title)
  end

end
