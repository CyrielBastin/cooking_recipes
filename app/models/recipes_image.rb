# frozen_string_literal: true

##
# == Fields
# recipe: ApplicationRecord::Recipe
# name:   string
class RecipesImage < ApplicationRecord

  belongs_to :recipe

end
