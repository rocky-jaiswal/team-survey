class UsersController < ApplicationController
  before_action :requires_valid_token
  before_action :set_user, only: [:update, :destroy]

  def index
    users = User.all
    render json: users
  end

  # POST /users.json
  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {}, status: 400
    end
  end

  def update
    if @user.update(user_params)
      render json: user
    else
      render json: {}, status: 400
    end
  end

  def destroy
    @user.destroy
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.fetch(:user, {})
    end
end
