class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true
  validates :body, length: {maximum: 140}

  belongs_to :post
  
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
