# frozen_string_literal: true

##
# == Fields
# recipe:     ApplicationRecord::Recipe
# ingredient: ApplicationRecord::Ingredient
# quantity:   integer
# measure:    ApplicationRecord::Measure
# comment:    string
class IngredientsRecipe < ApplicationRecord

  belongs_to :recipe
  belongs_to :ingredient
  belongs_to :measure, optional: true

  validates :quantity, numericality: { greater_than: 0 }, allow_nil: true
  validates :comment, length: { maximum: 150 }, allow_nil: true

end
