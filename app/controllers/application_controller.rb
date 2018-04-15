class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  private

  def requires_valid_token
    auth_token = request.headers['Authorization']
    decoded = WebToken.decode(auth_token.split(' ')[1])
    User.find(decoded[0]['id'])
  rescue => _e
    render json: {}, status: 401
  end
end
