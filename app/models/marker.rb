class Marker < ActiveRecord::Base
  belongs_to :user
  has_many   :comments
  has_many	 :tags
  has_one    :fav
end
