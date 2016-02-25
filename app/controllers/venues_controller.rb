class VenuesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  # GET /api/venues/:id
  # Get a specific venue
  def show
    @venue = Venue.fetch(params[:id])
    render json: @venue
  end

end

