class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.bigint :survey_id
      t.bigint :question_id
      t.text :response

      t.timestamps
    end
  end
end
