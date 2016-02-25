class Venue < ActiveRecord::Base
  include HTTParty

  belongs_to :event

  def self.fetch(id)
    query = { 
      token: Rails.application.secrets.eventbrite_api_key
    }

    url = "https://www.eventbriteapi.com/v3/venues/#{id}"
    response = HTTParty.get(url, query: query)
    
    venue = JSON.parse(response.body)

    return venue
  end

end
