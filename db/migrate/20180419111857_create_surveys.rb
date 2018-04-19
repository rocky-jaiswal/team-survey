class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.text :title
      t.boolean :active
      t.bigint :respondents, array: true, default: []

      t.timestamps
    end
  end
end
