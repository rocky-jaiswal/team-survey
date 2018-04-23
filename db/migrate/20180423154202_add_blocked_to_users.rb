class AddBlockedToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.boolean :blocked
    end
  end
end
