import type { RecipeDifficulty, RecipePrice } from '@/models/recipe'

export default interface GetRecipeDTO {
  id: number
  image: string
  name: string
  country_id: number | null
  category_id: number
  user_id: number
  preparation_time: number | null
  cooking_time: number | null
  number_of_people: number | null
  difficulty: RecipeDifficulty
  price: RecipePrice
  created_at: string
  updated_at: string
  description: string

  category: {
    id: number
    name: string
  }
  country?: {
    id: number
    image: string | null
    name: string
  } | null
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
  image: string | null
}

export interface GetRecipeIngredientDTO {
  id: number
  ingredient_id: number
  image: string | null
  name: string
  quantity: number | null
  measure: string | null
  comment: string | null
}

export interface GetRecipeInstructionDTO {
  id: number
  step: number
  comment: string
}
