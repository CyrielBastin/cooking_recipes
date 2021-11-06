# frozen_string_literal: true

##
# == Fields
# name:             string
# category:         ApplicationRecord::Category
# user:             ApplicationRecord::User
# preparation_time: integer
# cooking_time:     integer
# number_of_people: integer
# difficulty:       string
# price:            string
# image:            string
# preparation:      text
# user_comment:     string
# created_at:       datetime
# updated_at:       datetime
class Recipe < ApplicationRecord
  
  belongs_to :user
  belongs_to :category
  has_many :ingredients_recipes
  has_many :ingredients, through: :ingredients_recipes
  has_and_belongs_to_many :kitchenwares
  has_and_belongs_to_many :countries
  has_many :recipe_images

  validates :name, presence: true
  validates :preparation_time,
            :cooking_time,
            :number_of_people,
                allow_nil: true, numericality: { greater_than: 0 }
  enum difficulty: %i[easy regular hard]
  enum price: %i[low medium high]
  validates_presence_of :image, :preparation

end
