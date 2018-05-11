json.post do
  json.partial! 'api/posts/post', post: @post
end

json.user do
  json.set! @post.user.id do
    json.partial! 'api/users/user', user: @post.user
  end
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comments', comment: comment
    end
  end
end
