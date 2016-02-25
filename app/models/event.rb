class Event < ActiveRecord::Base
  include HTTParty

  def self.fetch
    query = { 
      app_key: Rails.application.secrets.eventful_api_key,
      location: "Yerevan",
      page_size: "50"
    }

    url = "http://api.eventful.com/json/events/search"
    response = HTTParty.get(url, query: query)
    
    events = JSON.parse(response.body)

    return events
  end

end
