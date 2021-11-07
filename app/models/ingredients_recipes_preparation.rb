class IngredientsRecipesPreparation < ApplicationRecord
  self.table_name = 'ingredients_recipes_preparation'

  belongs_to :recipes_preparation
  belongs_to :ingredient

end
