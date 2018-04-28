class SessionsController < ApplicationController

  def create
    user = User.find_by(short_token: session_params[:token])
    if user && (DateTime.now - 1.hour) < user.short_token_issue_time
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
