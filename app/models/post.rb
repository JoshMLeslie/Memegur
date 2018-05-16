require 'open-uri'

class Post < ApplicationRecord
  ###################
  ### Validations ###
  ###################
  validates :title, presence: true, length: {maximum: 140}
  validates :body, presence: true, length: {maximum: 255}

  has_attached_file :image, default_url: "snoopy_mailbox.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :comments, dependent: :destroy

  has_many :votes,
    as: :votable


  belongs_to :user,
    foreign_key: :author_id

  attr_accessor :image_remote_url
  attr_accessor :image_file_name

  def image_remote_url=(url_value)
    self.image = URI.parse(url_value)
    # Assuming url_value is http://example.com/photos/face.png
    # image_file_name == "face.png"
    # image_content_type == "image/png"
    @image_remote_url = url_value
  end

end
