namespace :events do

  desc "Fill events table with eventbrite data"
  task :backfill => :environment do
    query = { 
      token: Rails.application.secrets.eventbrite_api_key,
      :'location.address' => "San Francisco",
      popular: true,
      :'start_date.keyword' => "this_week"
    }

    url = "https://www.eventbriteapi.com/v3/events/search"
    response = HTTParty.get(url, query: query)
    
    events = JSON.parse(response.body)

    events["events"].each do |event|
      name          =  event["name"]["text"]        if event["name"]
      description   =  event["description"]["text"] if event["description"]
      url           =  event["url"]                 if event["url"]
      start_date    =  event["start"]["utc"]        if event["start"]
      end_date      =  event["end"]["utc"]          if event["end"]
      capacity      =  event["capacity"]            if event["capacity"]
      status        =  event["status"]              if event["status"]
      currency      =  event["currency"]            if event["currency"]
      online_event  =  event["online_event"]        if event["online_event"]
      venue_id      =  event["venue_id"]            if event["venue_id"]
      category      =  event["category_id"]         if event["category_id"]
      logo          =  event["logo"]["url"]         if event["logo"]

      Event.create(
        name:         name,
        description:  description,
        url:          url,
        start_date:   start_date,
        end_date:     end_date,
        capacity:     capacity,
        status:       status,
        currency:     currency,
        online_event: online_event,
        category:     category,
        logo:         logo
      )

      puts "Created a new event #{name}..."
    end
  end

end
