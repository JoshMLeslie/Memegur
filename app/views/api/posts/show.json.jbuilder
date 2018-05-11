json.post do
  json.partial! 'api/posts/post', post: @post
end

authors = [@post.user]

json.comments do
  @post.comments.each do |comment|
    authors.push(comment.author)
    json.set! comment.id do
      json.partial! 'api/comments/comments', comment: comment
    end
  end
end

json.users do
  authors.each do |author|
    json.set! author.id do
      json.partial! 'api/users/user', user: author
    end
  end
end
