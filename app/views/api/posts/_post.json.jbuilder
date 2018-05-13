json.set! post.id do
  json.extract! post, :id, :title, :body, :author_id, :updated_at

  json.comments_list post.comments.map(&:id)

  json.image_url asset_path(post.image.url)
end
