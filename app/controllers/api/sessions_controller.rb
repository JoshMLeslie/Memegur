class Api::SessionsController < ApplicationController

  def create
    error = {json: ["Invalid username/password combination"], status: 401}
    username = params[:user][:username]
    password = params[:user][:password]

    # skip the db hit
    return (render error) if ( username.empty? || password.empty? )

    @user = User.find_by_credentials( username, password )

    if @user
      login(@user)
      render partial: 'api/users/user', locals: { user: @user}
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    if logged_in?
      logout

      @posts = Post.all
      render "api/posts/index"
    else
      render json: "How did this happen?", status: 418
    end
  end
end
