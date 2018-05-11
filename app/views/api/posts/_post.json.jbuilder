json.set! post.id do
  json.extract! post, :id, :title, :body, :author_id
end
