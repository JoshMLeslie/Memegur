json.user do
  json.partial! 'api/users/user', user: @user
end

json.comments do
  @user.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comments', comment: comment
    end
  end
end

json.post do
  @user.posts.each do |post|
      json.partial! 'api/posts/post_lite', post: post
  end
end
