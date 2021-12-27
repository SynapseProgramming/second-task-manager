class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :task
      t.string :priority
      t.text :description

      t.timestamps
    end
  end
end
