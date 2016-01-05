class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :name
      t.text :description
      t.string :latitude
      t.string :longitude
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
