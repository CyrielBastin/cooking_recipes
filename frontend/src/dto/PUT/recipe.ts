import type {
  PostIngredientsRecipesAttributes,
  PostInstructionsRecipesAttributes
} from '../POST/recipe'
import type PostRecipeDTO from '../POST/recipe'

export default interface PutRecipeDTO extends PostRecipeDTO {
  id: number
  ingredients_recipes_attributes?: Array<PutIngredientsRecipesAttributes>
  instructions_recipes_attributes?: Array<PutInstructionsRecipesAttributes>
}

export interface PutIngredientsRecipesAttributes extends PostIngredientsRecipesAttributes {
  id: number
}

export interface PutInstructionsRecipesAttributes extends PostInstructionsRecipesAttributes {
  id: number
}
