class CommentsController < ApplicationController
  
  # GET /api/comments
  # Get all the comments
  def index
    render json: Comment.all
  end

  # GET /api/comments/:id
  # Get a specific comment
  def show
    render json: Comment.find(params[:id])
  end

  # POST /api/comments
  # Add a new comment
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: { error: "Comment creating error" }, status: :unprocessable_entity
    end
  end
  
  private

  def comment_params
    params.require(:comment).permit(:text, :user_id, :marker_id)
  end

end

