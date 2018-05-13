# for displaying on the front page
# still need to implement votes/'total_votes'

@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title
    json.image_url asset_path(post.image.url)
  end
end
