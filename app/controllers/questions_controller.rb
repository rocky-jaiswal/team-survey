class QuestionsController < ApplicationController
  before_action :requires_valid_token

  def index
    active_survey = Survey.where({ active: true }).first
    response = Survey.user_has_responded(@user.id) ? [] : QUESTIONS.merge({ survey_id: active_survey.id })
    render json: response
  end

end
