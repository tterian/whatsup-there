class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string   :name
      t.string   :address
      t.integer  :longitude
      t.integer  :latitude
      t.integer  :event_id

      t.timestamps null: false
    end
  end
end
