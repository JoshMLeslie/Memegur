json.array! @posts do |post|
  # for displaying on the front page
  # will end up returning [image_id, title, total_votes]
  json.partial! 'api/posts/post', post: post
end
