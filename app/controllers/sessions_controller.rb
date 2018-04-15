class SessionsController < ApplicationController

  def create
    user = User.find_by(short_token: session_params[:token])
    if user
      render json: { jwt: WebToken.create(user) }
    else
      render json: {}, status: 400
    end
  end

  private
  def session_params
    params.require(:session).permit(:token)
  end
end
