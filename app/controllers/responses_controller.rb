class ResponsesController < ApplicationController
  before_action :requires_valid_token

  def create
    survey_id = params[:survey_id].to_i
    allResponses = Response.build_bulk(survey_id, responses)
    Response.create!(allResponses)
    Survey.add_respondent(survey_id, @user.id)
    render json: {}
  rescue => e
    render json: {}, status: 500
  end

  def index
    survey_id = params[:survey_id].to_i
    render json: Response.aggregate_by_question(survey_id)
  end

  private

  def responses
    params.permit(response: [])
    params[:response].map do |r|
      { questionId: r[:questionId], selection: r[:selection]}
    end
  end

end
