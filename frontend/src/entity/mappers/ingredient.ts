import type GetIngredientDTO from '@/dto/GET/ingredient'
import type Ingredient from '../ingredient'
import type PostIngredientDTO from '@/dto/POST/ingredient'
import type PutIngredientDTO from '@/dto/PUT/ingredient'

export default class IngredientMapper {
  static fromGetDTO(ingredient_dto: GetIngredientDTO): Ingredient {
    return {
      id: ingredient_dto.id,
      name: ingredient_dto.name,
      image: ingredient_dto.image
    }
  }

  static toPostDTO(ingredient: Ingredient): PostIngredientDTO {
    return {
      name: ingredient.name,
      image: ingredient.image
    }
  }

  static toPutDTO(ingredient: Ingredient): PutIngredientDTO {
    return {
      id: ingredient.id,
      name: ingredient.name,
      image: ingredient.image
    }
  }
}
