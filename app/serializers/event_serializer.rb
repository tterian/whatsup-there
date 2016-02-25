class EventSerializer < ActiveModel::Serializer
  attributes :name, :description, :url, :start_date, :end_date, :capacity, :status
  attributes :currency, :online_event, :venue, :category, :logo

  has_one  :venue
end
