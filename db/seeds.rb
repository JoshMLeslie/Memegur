require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ensure reset of id postitions

User.destroy_all
Post.destroy_all
Comment.destroy_all

bob = User.try(:create, {username: "Bob", password: "bobobob", bio: "Who is Bob anyways?"})


lurkerBob = User.create(
  username: "lurkerBob",
  password: "bobobob",
  bio: "I am lurkerBob"
)

# USERS #
10.times do |i|
  User.create(
    username: Faker::BackToTheFuture.character,
    password: Faker::WorldOfWarcraft.quote.slice(0,10).gsub(/\s+/, ""),
    bio: Faker::BackToTheFuture.quote.slice(0,140)
  )
end

25.times do |i|
  User.create(
    username: Faker::HitchhikersGuideToTheGalaxy.character,
    password: Faker::WorldOfWarcraft.quote.slice(0,10).gsub(/\s+/, ""),
    bio:  Faker::HitchhikersGuideToTheGalaxy.marvin_quote
  )
end

puts "users just over half-way"

25.times do |i|
  User.create(
    username: Faker::Dune.character,
    password: Faker::WorldOfWarcraft.quote.slice(0,10).gsub(/\s+/, ""),
    bio:  Faker::Dune.quote.slice(0,140)
  )
end

users = User.all
puts "users done"
### ###


# POSTS #
100.times do |i|
  puts "posts halfway" if i == 50

  keyword = %w(billmurray dogs cats starwars calvinandhobbes tigers woodworking disney magic fantasy scifi doctorwho avengers).sample
  Post.create(
    title: "Is this #{keyword}?",
    body: "What is #{keyword} anyways?",
    author_id: users.sample.id,
    image: URI.parse("https://loremflickr.com/320/240/#{keyword}")
  )
end

posts = Post.all
puts "posts done"
### ###

# COMMENTS #
50.times do
  Comment.create(
    body: Faker::Dune.quote.slice(0,140),
    author_id: users.sample.id,
    post_id: posts.sample.id
  )
end
50.times do
  Comment.create(
    body: Faker::HowIMetYourMother.quote.slice(0,140),
    author_id: users.sample.id,
    post_id: posts.sample.id
  )
end
50.times do
  Comment.create(
    body: Faker::Simpsons.quote.slice(0,140),
    author_id: users.sample.id,
    post_id: posts.sample.id
  )
end
puts "comments half-way"
50.times do
  Comment.create(
    body: "What is in a commentBob anyways?",
    author_id: users.sample.id,
    post_id: posts.sample.id
  )
end
50.times do
  Comment.create(
    body: Faker::TheFreshPrinceOfBelAir.quote.slice(0,140),
    author_id: users.sample.id,
    post_id: posts.sample.id
  )
end

comments = Comment.all
puts "comments done"

# VOTES #
odds = [1, 1, 1, -1, -1]
150.times do
  vote = odds.sample

  posts.sample.votes.create({
    vote: vote,
    user_id: users.sample
    })

  comments.sample.votes.create({
    vote: vote,
    user_id: lurkerBob.id
    })
end
puts "votes halfway done"
150.times do
  vote = odds.sample

  posts.sample.votes.create({
    vote: vote,
    user_id: users.sample
    })

  comments.sample.votes.create({
    vote: vote,
    user_id: lurkerBob.id
    })
end
puts "votes done"
### ###

puts "seeding complete!"
