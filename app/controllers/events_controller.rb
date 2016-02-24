class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  # GET /api/events
  # Get all the events
  def index
    @events = Event.fetch
    render json: @events
  end

end

