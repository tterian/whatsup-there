class FavSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :marker_id, :faved
end
