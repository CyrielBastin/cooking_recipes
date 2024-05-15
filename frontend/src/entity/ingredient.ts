export default interface Ingredient {
  id: number
  image: string | null
  name: string
}

export interface IngredientRecipe extends Ingredient {
  ingredientsRecipeId: number
  quantity: number | null
  measure?: string | null
  comment: string | null
}
