# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.destroy_all
Post.destroy_all

bob1 = User.try(:create, {username: "Bob", password: "bobobob", bio: "I am bob"})
bob2 = User.create(username: "Bob2", password: "bobobob", bio: "I am bob")
bob3 = User.create(username: "Bob3", password: "bobobob", bio: "I am bob")
bob4 = User.create(username: "Bob4", password: "bobobob", bio: "I am bob")

bobP = Post.create(title: "bobP", body: "what is in a Bob anyways?", author_id: 1)
bobP2 = Post.create(title: "bobP2", body: "what is in a Bob anyways?", author_id: 1)
bobP3 = Post.create(title: "bobP3", body: "what is in a Bob anyways?", author_id: 3)
bobP4 = Post.create(title: "bobP4", body: "what is in a Bob anyways?", author_id: 4)
