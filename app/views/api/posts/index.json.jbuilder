# for displaying on the front page
# still need to implement votes/'total_votes'

@posts.each do |post|
  json.partial! 'api/posts/post_lite', post: post
end
