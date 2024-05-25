export default interface Ingredient {
  id: number
  image: string | null
  name: string
}

export interface IngredientRecipe extends Ingredient {
  id: number
  ingredientId: number
  quantity: number | null
  measure?: string | null
  comment: string | null
}
