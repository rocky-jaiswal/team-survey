class QuestionsController < ApplicationController
  before_action :requires_valid_token

  def index
    render json: QUESTIONS
  end

end
