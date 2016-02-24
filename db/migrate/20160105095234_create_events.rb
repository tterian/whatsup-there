class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string   :name
      t.text     :description
      t.datetime :start_date
      t.datetime :end_date
      t.datetime :created
      t.datetime :changed
      t.integer  :capacity
      t.string   :status

      t.timestamps null: false
    end
  end
end
