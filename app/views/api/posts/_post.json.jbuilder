json.set! post.id do
  json.extract! post,
    :id,
    :title,
    :author_id,
    :updated_at,
    :body,
    :image_content_type

  json.comments_list post.comments.map(&:id)

  json.image_url image_url(post.image.url)
end
