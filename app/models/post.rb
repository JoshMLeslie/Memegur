class Post < ApplicationRecord
  ###################
  ### Validations ###
  ###################
  validates :title, presence: true, length: {maximum: 140}
  validates :body, presence: true, length: {maximum: 255}

  has_many :votes #, :comments
  # has_one :image
  belongs_to :user,
    foreign_key: :author_id
end
