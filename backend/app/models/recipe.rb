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
# preparations:     ApplicationRecord::RecipesPreparation
# description:      text
# created_at:       datetime
# updated_at:       datetime
class Recipe < ApplicationRecord

  belongs_to :user
  belongs_to :category
  has_many :ingredients_recipes, dependent: :destroy
  has_many :ingredients, through: :ingredients_recipes
  has_many :recipes_preparations, dependent: :destroy
  has_and_belongs_to_many :kitchenwares
  has_and_belongs_to_many :countries
  has_many :recipes_images, dependent: :destroy

  accepts_nested_attributes_for :recipes_preparations, :ingredients_recipes, allow_destroy: true

  validates :name, presence: true, length: { maximum: 100 }
  validates :preparation_time,
            :cooking_time,
            :number_of_people,
            allow_nil: true, numericality: { greater_than: 0 }
  enum difficulty: %i[easy normal hard], _prefix: :difficulty
  enum price: %i[low medium high], _suffix: true
  validates_presence_of :image

end
