import type { RecipeDifficulty, RecipePrice } from '@/entity/recipe'

export default interface PostRecipeDTO {
  image: string | null
  name: string
  country_id: number | null
  category_id: number
  user_id: number
  preparation_time: number | null
  cooking_time: number | null
  number_of_people: number | null
  difficulty: RecipeDifficulty
  price: RecipePrice
  description: string

  kitchenware_ids?: Array<number>
  ingredients_recipes_attributes?: Array<PostIngredientsRecipesAttributes>
  instructions_recipes_attributes?: Array<PostInstructionsRecipesAttributes>
}

export interface PostIngredientsRecipesAttributes {
  ingredient_id: number
  quantity: number | null
  measure_id: number | null
  comment: string | null
  _destroy?: '1' | true
}

export interface PostInstructionsRecipesAttributes {
  step: number
  comment: string
  _destroy?: '1' | true
}
