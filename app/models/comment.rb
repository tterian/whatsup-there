class Comment < ActiveRecord::Base
  belongs_to  :marker
  belongs_to  :user
end
