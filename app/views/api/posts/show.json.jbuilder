json.post do
  json.partial! 'api/posts/post', post: @post
end

json.votes do
  @post.votes.each do |vote|
    json.set! vote.id do
      json.partial! 'api/votes/votes', vote: vote
    end
  end

  @post.comments.each do |comment|
    comment.votes.each do |vote|
      json.set! vote.id do
        json.partial! 'api/votes/votes', vote: vote
      end
    end
  end
end

authors = [@post.user]

json.comments do
  @post.comments.each do |comment|
    authors.push(comment.author)
    json.set! comment.id do
      json.partial! 'api/comments/comments', comment: comment

      json.votes_list comment.votes.map(&:id)
    end
  end
end

json.users do
  authors.each do |author|
    json.set! author.id do
      json.partial! 'api/users/user_lite', user: author
    end
  end
end
