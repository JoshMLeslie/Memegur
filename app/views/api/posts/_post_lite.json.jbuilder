json.set! post.id do
  json.extract! post,
    :id,
    :title,
    :author_id,
    :updated_at,
    :image_content_type

    json.image_url asset_path(post.image.url)
end
