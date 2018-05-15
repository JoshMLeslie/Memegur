module VoteActions

  def render_post(vote)
    if vote.votable_type.include?("Post")
      id = vote.votable_id
    else
      id = Comment.find(vote.votable_id).post.id
    end

    @post = Post.find(id)
    render "api/posts/show"
  end

  def create_vote
    vote = Vote.new(
      vote: params[:spin],
      votable_id: params["#{controller_name.classify.downcase}_id"],
      votable_type: controller_name.classify,
      user_id: current_user.id
    )

    if vote.save
      render_post(vote)
    else
      render json: vote.errors.full_messages
    end
  end

  def remove_vote
    vote = Vote.find(params[:vote_id])

    if vote
      vote.destroy
      render_post(vote)
    else
      render json: ["No vote exists"]
    end
  end
end
