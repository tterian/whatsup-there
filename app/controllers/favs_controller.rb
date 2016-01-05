class FavsController < ApplicationController
  
  # GET /api/favs
  # Get all the favorities
  def index
    render json: Fav.find_by(user_id: params[:user_id])
  end

  # GET /api/favs/:id
  # Get a specific favority
  def show
    render json: Fav.find(params[:id])
  end

  # POST /api/favs/:id
  # Update a fav record
  def update
    @fav = Fav.find(params[:id])

    if @fav.update(fav_params)
      render json: @fav
    else
      render json: { error: "Fav updating error" }, status: :unprocessable_entity
    end
  end

  private

  def fav_params
    params.require(:fav).permit(:user_id, :marker_id, :faved)
  end

end

