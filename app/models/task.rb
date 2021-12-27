class Task < ApplicationRecord
  validates :task, presence: true
  validates :priority, presence: true
  validates :description, presence: true
end
