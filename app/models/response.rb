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

  def self.aggregate_by_question(survey_id)
    responses = Response.where(survey_id: survey_id)
    aggregates = responses.reduce({}) do |agg, resp|
      if agg[resp.question_id].nil?
        agg[resp.question_id] = [resp.response]
      else
        agg[resp.question_id] << resp.response
      end
      agg
    end
    aggregates.keys.map do |ak|
      question = QUESTIONS['questions'].find{|q| q['id'] == ak}
      group = aggregates[ak].group_by{|e| e}
      {
        id: question['id'],
        question: question['title'],
        responses: group.keys.map do |k|
          resp = {}
          resp[:option] = k
          resp[:count] = group[k].count
          resp
        end
      }
    end
  end

end
