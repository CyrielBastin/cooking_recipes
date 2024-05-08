import type { RecipeDifficulty, RecipePrice } from '@/entity/recipe'

export default interface PostRecipeDTO {
  image?: string
  name: string
  country_id?: number
  category_id: number
  user_id: number
  preparation_time?: number
  cooking_time?: number
  number_of_people?: number
  difficulty: RecipeDifficulty
  price: RecipePrice
  description: string

  kitchenware_ids?: Array<number>
  ingredients_recipes_attributes?: Array<PostIngredientsRecipesAttributes>
  instructions_recipes_attributes?: Array<PostInstructionsRecipesAttributes>
}

export interface PostIngredientsRecipesAttributes {
  ingredient_id: number
  quantity?: number
  measure_id?: number
  comment?: string
  _destroy?: '1' | true
}

export interface PostInstructionsRecipesAttributes {
  step: number
  comment: string
  _destroy?: '1' | true
}
