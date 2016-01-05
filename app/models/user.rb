class User < ActiveRecord::Base
  has_many :markers
  has_many :favs
  has_many :comments
  
  # Include default devise modules.
  devise  :database_authenticatable,
          :registerable,
          :trackable,
          :validatable
  include DeviseTokenAuth::Concerns::User
end
