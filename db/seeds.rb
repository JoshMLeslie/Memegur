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

oneBob = User.create(
  username: "oneBob",
  password: "bobobob",
  bio: "I am oneBob"
)

oppBob = User.create(
  username: "oppBob",
  password: "bobobob",
  bio: "I am oppBob"
)


bobP = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: bob.id,
  image_content_type: "image/jpeg"
)

bobP2 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: bob.id,
  image_content_type: "image/jpeg"
)

bobP3 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: oneBob.id,
  image_content_type: "image/jpeg"
)

bobP4 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: oppBob.id,
  image_content_type: "image/jpeg"
)


bobC = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oppBob.id,
  post_id: bobP.id
)

bobC2 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oppBob.id,
  post_id: bobP2.id
)

bobC3 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oneBob.id,
  post_id: bobP.id
)

bobC4 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: bob.id,
  post_id: bobP.id
)

bobP.votes.create({vote: 1, user_id: lurkerBob.id})
bobP2.votes.create({vote: 1, user_id: lurkerBob.id})
bobP2.votes.create({vote: 1, user_id: oppBob.id})
bobP3.votes.create({vote: -1, user_id: oppBob.id})

bobC.votes.create({vote: 1, user_id: lurkerBob.id})
bobC2.votes.create({vote: 1, user_id: lurkerBob.id})
bobC2.votes.create({vote: 1, user_id: oppBob.id})
bobC3.votes.create({vote: -1, user_id: oppBob.id})
