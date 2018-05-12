json.set! post.id do
  json.extract! post, :id, :title, :body, :author_id
  json.image_url asset_path(post.image.url)
end
