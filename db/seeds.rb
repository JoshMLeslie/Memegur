# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ensure reset of id postitions
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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
  author_id: bob.id
)

bobP2 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: bob.id
)

bobP3 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: oneBob.id
)

bobP4 = Post.create(
  title: "postBob",
  body: "What is in a postBob anyways?",
  author_id: oppBob.id
)


bobP = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oppBob.id,
  post_id: bobP.id
)

bobP2 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oppBob.id,
  post_id: bobP2.id
)

bobP3 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: oneBob.id,
  post_id: bobP.id
)

bobP4 = Comment.create(
  body: "What is in a commentBob anyways?",
  author_id: bob.id,
  post_id: bobP.id
)
