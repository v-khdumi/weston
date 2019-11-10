class User < ApplicationRecord
  devise :database_authenticatable, :timeoutable

  has_many :tasks
end
