class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.text :title, null: false, index: { unique: true }
      t.boolean :active
      t.bigint :respondents, array: true, default: []

      t.timestamps
    end
  end
end
