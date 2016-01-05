class CreateFavs < ActiveRecord::Migration
  def change
    create_table :favs do |t|
      t.integer :user_id
      t.integer :marker_id
      t.boolean :faved

      t.timestamps null: false
    end
  end
end
