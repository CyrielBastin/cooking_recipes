# frozen_string_literal: true

##
# Represents the differents step for a recipe
# step 1: cut onions and leeks
# step 2: put them in the pan
#
# == Fields
# recipe: ApplicationRecord::Recipe
# step:   integer
# detail: string
class RecipesPreparation < ApplicationRecord

  belongs_to :recipe
  has_many :ingredients_recipes_preparations, dependent: :destroy
  has_many :ingredients, through: :ingredients_recipes_preparations

  validates :step, presence: true, numericality: { greater_than: 0 }
  validates :detail, presence: true, length: { maximum: 255 }

end
