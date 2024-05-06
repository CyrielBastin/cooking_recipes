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
  ingredients_recipes_attributes?: Array<{
    ingredient_id: number
    quantity: string
    measure_id: number
    comment: string
    _destroy?: string
  }>
  instructions_recipes_attributes?: Array<{
    step: number
    comment: string
    _destroy?: string
  }>
}
