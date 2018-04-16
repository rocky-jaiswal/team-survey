class UserProfilesController < ApplicationController
  before_action :requires_valid_token

  def show
    render json: { admin: @user.admin, email: @user.email }
  end

end
