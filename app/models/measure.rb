# frozen_string_literal: true

##
# Represents the unit of measure for an ingredient in a recipe
# g, cl, teaspoon (of salt), ...
#
# == Fields
# name: string
class Measure < ApplicationRecord

  has_many :ingredients_recipes

  validates :name, presence: true, uniqueness: true, length: { maximum: 30 }

end
