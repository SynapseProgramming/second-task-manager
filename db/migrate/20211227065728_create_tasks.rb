class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :task, null:false
      t.string :priority, null:false
      t.text :description, null:false

      t.timestamps
    end
  end
end
