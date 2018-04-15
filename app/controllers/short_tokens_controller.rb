class ShortTokensController < ApplicationController

  def create
    token = ShortToken.new(token_params[:email]).create
    if token
      render json: {token: token}
    else
      render json: {}, status: 500
    end
  end

  private
  def token_params
    params.require(:short_token).permit(:email)
  end
end
