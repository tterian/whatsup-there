class TagsController < ApplicationController
  
  # GET /api/tags
  # Get all the tags
  def index
    render json: Tag.all
  end

  # GET /api/tags/:id
  # Get a specific tag
  def show
    render json: Tag.find(params[:id])
  end

  # POST /api/tags
  # Add a new tag
  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render json: @tag
    else
      render json: { error: "Tag creating error" }, status: :unprocessable_entity
    end
  end
  
  private

  def tag_params
    params.require(:tag).permit(:name)
  end


end