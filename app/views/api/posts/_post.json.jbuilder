json.post do
  json.extract! post, :id, :title, :body
end

json.author do
  json.partial 'api/users/user', user: post.user
end
