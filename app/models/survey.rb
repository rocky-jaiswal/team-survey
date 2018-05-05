class Survey < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  def self.add_respondent(id, user_id)
    survey = Survey.find(id)
    survey.respondents << user_id
    survey.save!
  end

  def self.user_has_responded(user_id)
    active_survey = Survey.where({ active: true }).first
    active_survey.respondents.include?(user_id)
  end

end
