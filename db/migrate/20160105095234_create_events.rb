class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string   :name
      t.text     :description
      t.string   :url
      t.datetime :start_date
      t.datetime :end_date
      t.integer  :capacity
      t.string   :status
      t.string   :currency
      t.boolean  :online_event
      t.integer  :venue
      t.integer  :category
      t.string   :logo

      t.timestamps null: false
    end
  end
end
