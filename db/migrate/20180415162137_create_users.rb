class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :email, null: false, index: { unique: true }
      t.boolean :admin
      t.text :short_token
      t.datetime :short_token_issue_time

      t.timestamps
    end
  end
end
