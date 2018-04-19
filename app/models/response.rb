class Response < ApplicationRecord

  validates :survey_id, presence: true, numericality: true
  validates :question_id, presence: true, numericality: true
  validates :response, presence: true

  def self.build_bulk(survey_id, responses)
    responsesToPersist = []
    responses.each do |response|
      if (response[:selection].is_a?(Array))
        response[:selection].each do |resp|
          responsesToPersist << { survey_id: survey_id, question_id: response[:questionId], response: resp }
        end
      else
        responsesToPersist << { survey_id: survey_id, question_id: response[:questionId], response: response[:selection] }
      end
    end
    responsesToPersist
  end

end
