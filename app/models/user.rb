class User < ApplicationRecord
###################
### Validations ###
###################
  validates :username, :password_digest, :session_token, presence: true

  validates :username, length: { minimum: 3 }, uniqueness: true
  validates :password, length: { in: 6..14 }, allow_nil: true

  has_many :posts,
    foreign_key: :author_id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id

  after_initialize :ensure_session_token

###############
### Methods ###
###############
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

private
  def ensure_session_token
    self.session_token || generate_unique_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
