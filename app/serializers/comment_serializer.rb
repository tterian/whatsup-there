class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :marker_id, :poster, :created_at

  def poster
    return object.user.image
  end
end
