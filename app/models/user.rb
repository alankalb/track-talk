class User < ApplicationRecord
  has_secure_password
  has_secure_password :reset_token
  
  has_many :posts
  has_many :comments

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
