class IngredientsRecipesPreparation < ApplicationRecord

  belongs_to :recipes_preparation
  belongs_to :ingredient

end
