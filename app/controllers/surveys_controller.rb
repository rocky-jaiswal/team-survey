class SurveysController < ApplicationController
  before_action :requires_valid_token
  before_action :set_user, only: [:update, :destroy]

  def index
    surveys = Survey.all
    render json: surveys
  end

end
