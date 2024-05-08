import type { RecipeDifficulty, RecipePrice } from '@/entity/recipe'

export default interface GetRecipeDTO {
  id: number
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
  created_at: Date
  updated_at: Date
  description: string

  category: {
    id: number
    name: string
  }
  country?: {
    id: number
    name: string
  }
  user: {
    id: number
    email: string
  }

  kitchenwares?: Array<GetRecipeKitchenwareDTO>
  ingredients?: Array<GetRecipeIngredientDTO>
  instructions?: Array<GetRecipeInstructionDTO>
}

export interface GetRecipeKitchenwareDTO {
  id: number
  name: string
  image?: string
}

export interface GetRecipeIngredientDTO {
  ingredients_recipe_id: number
  id: number
  image: string
  name: string
  quantity: number
  measure: string
  comment: string
}

export interface GetRecipeInstructionDTO {
  id: number
  step: number
  comment: string
}
