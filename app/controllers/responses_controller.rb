class ResponsesController < ApplicationController
  before_action :requires_valid_token

  def create
    allResponses = Response.build_bulk(params[:survey_id].to_i, @user.id, responses)
    Response.create!(allResponses)
    render json: {}
  rescue => e
    render json: {}, status: 500
  end

  private

  def responses
    params.permit(response: [])
    params.permit(:survey_id)
    params[:response].map do |r|
      { questionId: r[:questionId], selection: r[:selection]}
    end
  end

end
