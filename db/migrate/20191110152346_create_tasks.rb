class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.string :title
      t.text :content
      t.boolean :completed
      t.date :completed_date
      t.date :start_date
      
      t.timestamps
    end
  end
end
