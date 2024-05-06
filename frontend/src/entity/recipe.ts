import type Category from './category'
import type Country from './country'
import type { IngredientRecipe } from './ingredient'
import type Kitchenware from './kitchenware'
import type User from './user'

export default interface Recipe {
  id: number
  image?: string
  name: string
  countryId?: number
  categoryId: number
  userId: number
  preparationTime?: number
  cookingTime?: number
  numberOfPeople?: number
  difficulty: RecipeDifficulty
  price: RecipePrice
  createdAt: Date
  updatedAt: Date
  description: string

  category?: Category
  user?: User
  country?: Country

  kitchenwares?: Kitchenware[]
  ingredients?: IngredientRecipe[]
  instructions?: InstructionsRecipe[]
}

export interface InstructionsRecipe {
  id: number
  step: number
  comment: string
}

export type RecipeDifficulty = 'easy' | 'normal' | 'hard'
export type RecipePrice = 'low' | 'medium' | 'high'
