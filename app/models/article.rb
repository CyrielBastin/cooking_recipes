# frozen_string_literal: true

##
# Represents articles that users can write about a topic or a recipe
#
# == Fields
# title:      string
# image:      string
# content:    text
# user:       ApplicationRecord::User
# created_at: datetime
# updated_at: datetime
class Article < ApplicationRecord
  
  belongs_to :user

  validates :title, presence: true
  validates :image, presence: true
  validates :content, presence: true

end
