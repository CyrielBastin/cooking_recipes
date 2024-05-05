export default interface Ingredient {
  id: number
  image?: string
  name: string
}

export interface IngredientRecipe extends Ingredient {
  IngredientRecipeId: number
  quantity?: number
  measure?: string
  comment?: string
}
