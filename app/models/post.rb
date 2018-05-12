class Post < ApplicationRecord
  ###################
  ### Validations ###
  ###################
  validates :title, presence: true, length: {maximum: 140}
  validates :body, presence: true, length: {maximum: 255}

  has_attached_file :image, default_url: "snoopy_mailbox.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :votes
  has_many :comments
  # has_one :image

  belongs_to :user,
    foreign_key: :author_id
end
