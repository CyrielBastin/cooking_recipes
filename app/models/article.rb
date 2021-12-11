# frozen_string_literal: true

##
# Represents articles that users can write about a topic or a recipe
#
# == Fields
# title:      string
# content:    text
# image:      string
# user:       ApplicationRecord::User
# created_at: datetime
# updated_at: datetime
class Article < ApplicationRecord
  extend Mobility
  translates :title, :content

  belongs_to :user

  validates :image, presence: true
  # validates :title, presence: true, length: { maximum: 150 }
  # validates :content, presence: true

end
