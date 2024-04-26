# frozen_string_literal: true

##
# Represents the differents step for a recipe
# step 1: cut onions and leeks
# step 2: put them in the pan
#
# == Fields
# recipe: ApplicationRecord::Recipe
# step:   integer
# comment: string
class InstructionsRecipe < ApplicationRecord

  belongs_to :recipe
  has_and_belongs_to_many :ingredients

  validates :step, presence: true, numericality: { greater_than: 0 }
  validates :comment, presence: true, length: { maximum: 255 }

end
