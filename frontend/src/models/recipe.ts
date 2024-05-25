import type Category from './category'
import type Country from './country'
import type { IngredientRecipe } from './ingredient'
import type Kitchenware from './kitchenware'
import type User from './user'

export default interface Recipe {
  id: number
  image: string
  name: string
  countryId: number | null
  categoryId: number
  userId: number
  preparationTime: number | null
  cookingTime: number | null
  numberOfPeople: number | null
  difficulty: RecipeDifficulty
  price: RecipePrice
  createdAt?: Date
  updatedAt?: Date
  description: string

  category?: Partial<Category>
  user?: Partial<User>
  country?: Partial<Country>

  kitchenwares?: Kitchenware[]
  ingredients?: IngredientRecipe[]
  instructions?: InstructionsRecipe[]
  // Create or update a recipe
  kitchenwareIds?: Array<number>
  ingredientsRecipesAttributes?: Array<IngredientsRecipesAttributes>
  instructionsRecipesAttributes?: Array<InstructionsRecipesAttributes>
}

export interface InstructionsRecipe {
  id: number
  step: number
  comment: string
}

export type RecipeDifficulty = 'easy' | 'normal' | 'hard'
export type RecipePrice = 'low' | 'medium' | 'high'

export interface IngredientsRecipesAttributes {
  id?: number
  ingredientId: number
  quantity: number | null
  measureId: number | null
  comment: string | null
  _destroy?: '1' | true
}

export interface InstructionsRecipesAttributes {
  id?: number
  step: number
  comment: string
  _destroy?: '1' | true
}
