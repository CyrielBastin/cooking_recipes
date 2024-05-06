import type PostRecipeDTO from '../POST/recipe'

export default interface PutRecipeDTO extends PostRecipeDTO {
  id: number
}
