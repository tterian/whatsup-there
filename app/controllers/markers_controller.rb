class MarkersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  # GET /api/markers
  # Get all the markers
  def index
    markers = Marker.all
    render json: markers
  end

  # GET /api/markers/:id
  # Get a specific marker
  def show
    marker = Marker.find(params[:id])
    render json: marker
  end

  # POST /api/markers
  # Add a new marker
  def create
    marker = Marker.new(marker_params)

    if marker.save
      render json: marker
      current_user.favs.create(marker_id: marker.id, faved: 0)
    else
      render json: { error: "Marker creating error" }, status: :unprocessable_entity
    end
  end
  
  private

  def marker_params
    params.require(:marker).permit(:name, :latitude, :longitude, :description, :tags, :user_id)
  end

end

