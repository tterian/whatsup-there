class MarkerSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :description, :user_id, :poster

  has_many :comments
  has_one  :fav
  has_many :tags

  def poster
    return object.user.image
  end

end
