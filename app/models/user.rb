class User < ApplicationRecord
  has_secure_password
  has_secure_password :reset_token

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
