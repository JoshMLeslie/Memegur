# for displaying on the front page
# will end up returning [image_id, title, total_votes] or something similar

@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
  end
end
