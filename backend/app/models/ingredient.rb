# frozen_string_literal: true

##
# Represents all the ingdredients needed for a given recipe
#
# == Fields
# name:  string
# image: string
class Ingredient < ApplicationRecord

  has_many :ingredients_recipes
  has_many :recipes, through: :ingredients_recipes
  has_and_belongs_to_many :instructions_recipes

  validates :name, presence: true, uniqueness: true, length: { maximum: 50 }

end
