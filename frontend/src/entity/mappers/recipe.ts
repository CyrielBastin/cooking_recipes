import type PostRecipeDTO from '@/dto/POST/recipe'
import type GetRecipeDTO from '../../dto/GET/recipe'
import type PutRecipeDTO from '@/dto/PUT/recipe'
import type Recipe from '../recipe'
import type {
  CreateOrUpdateRecipe,
  IngredientsRecipesAttributes,
  InstructionsRecipe,
  InstructionsRecipesAttributes
} from '../recipe'
import type Kitchenware from '../kitchenware'
import type {
  GetRecipeIngredientDTO,
  GetRecipeInstructionDTO,
  GetRecipeKitchenwareDTO
} from '../../dto/GET/recipe'
import type { IngredientRecipe } from '../ingredient'
import type {
  PostIngredientsRecipesAttributes,
  PostInstructionsRecipesAttributes
} from '@/dto/POST/recipe'
import type {
  PutIngredientsRecipesAttributes,
  PutInstructionsRecipesAttributes
} from '@/dto/PUT/recipe'

export default class recipeMapper {
  static fromGetDTO(recipe_dto: GetRecipeDTO): Recipe {
    return {
      id: recipe_dto.id,
      image: recipe_dto.image,
      name: recipe_dto.name,
      countryId: recipe_dto.country_id,
      categoryId: recipe_dto.category_id,
      userId: recipe_dto.user_id,
      preparationTime: recipe_dto.preparation_time,
      cookingTime: recipe_dto.cooking_time,
      numberOfPeople: recipe_dto.number_of_people,
      difficulty: recipe_dto.difficulty,
      price: recipe_dto.price,
      createdAt: recipe_dto.created_at,
      updatedAt: recipe_dto.updated_at,
      description: recipe_dto.description,
      user: {
        id: recipe_dto.user.id,
        email: recipe_dto.user.email
      },
      category: {
        id: recipe_dto.category.id,
        name: recipe_dto.category.name
      },
      country: {
        id: recipe_dto.country?.id,
        name: recipe_dto.country?.name
      },

      kitchenwares: recipe_dto.kitchenwares?.map(convert_kitchenware_from_dto),
      ingredients: recipe_dto.ingredients?.map(convert_ingredient_from_dto),
      instructions: recipe_dto.instructions?.map(convert_instruction_from_dto)
    }
  }

  static toPostDTO(recipe: CreateOrUpdateRecipe): PostRecipeDTO {
    const new_recipe = {
      image: recipe.image,
      name: recipe.name,
      country_id: recipe.countryId,
      category_id: recipe.categoryId,
      user_id: recipe.userId,
      preparation_time: recipe.preparationTime,
      cooking_time: recipe.cookingTime,
      number_of_people: recipe.numberOfPeople,
      difficulty: recipe.difficulty,
      price: recipe.price,
      description: recipe.description
    } as PostRecipeDTO
    if (recipe.kitchenwareIds) {
      new_recipe.kitchenware_ids = recipe.kitchenwareIds
    }
    if (recipe.ingredientsRecipesAttributes) {
      new_recipe.ingredients_recipes_attributes = recipe.ingredientsRecipesAttributes.map(
        convert_ingredient_to_post_dto
      )
    }
    if (recipe.instructionsRecipesAttributes) {
      new_recipe.instructions_recipes_attributes = recipe.instructionsRecipesAttributes.map(
        convert_instruction_to_post_dto
      )
    }

    return new_recipe
  }

  static toPutDTO(recipe: CreateOrUpdateRecipe): PutRecipeDTO {
    const update_recipe = {
      id: recipe.id,
      image: recipe.image,
      name: recipe.name,
      country_id: recipe.countryId,
      category_id: recipe.categoryId,
      user_id: recipe.userId,
      preparation_time: recipe.preparationTime,
      cooking_time: recipe.cookingTime,
      number_of_people: recipe.numberOfPeople,
      difficulty: recipe.difficulty,
      price: recipe.price,
      description: recipe.description
    } as PutRecipeDTO
    if (recipe.kitchenwareIds) {
      update_recipe.kitchenware_ids = recipe.kitchenwareIds
    }
    if (recipe.ingredientsRecipesAttributes) {
      update_recipe.ingredients_recipes_attributes = recipe.ingredientsRecipesAttributes.map(
        convert_ingredient_to_put_dto
      )
    }
    if (recipe.instructionsRecipesAttributes) {
      update_recipe.instructions_recipes_attributes = recipe.instructionsRecipesAttributes.map(
        convert_instruction_to_put_dto
      )
    }

    return update_recipe
  }
}

// ========================================================================================
function convert_kitchenware_from_dto(kitchenware: GetRecipeKitchenwareDTO): Kitchenware {
  return {
    id: kitchenware.id,
    name: kitchenware.name,
    image: kitchenware.image
  }
}

function convert_ingredient_from_dto(ingredient: GetRecipeIngredientDTO): IngredientRecipe {
  return {
    id: ingredient.id,
    image: ingredient.image,
    name: ingredient.name,
    ingredientRecipeId: ingredient.ingredients_recipe_id,
    quantity: ingredient.quantity,
    measure: ingredient.measure,
    comment: ingredient.comment
  }
}

function convert_ingredient_to_post_dto(
  ingredient: IngredientsRecipesAttributes
): PostIngredientsRecipesAttributes {
  return {
    ingredient_id: ingredient.ingredientId,
    quantity: ingredient.quantity,
    measure_id: ingredient.measureId,
    comment: ingredient.comment,
    _destroy: ingredient._destroy
  }
}
function convert_ingredient_to_put_dto(
  ingredient: IngredientsRecipesAttributes
): PutIngredientsRecipesAttributes {
  return {
    id: ingredient.id as number,
    ingredient_id: ingredient.ingredientId,
    quantity: ingredient.quantity,
    measure_id: ingredient.measureId,
    comment: ingredient.comment,
    _destroy: ingredient._destroy
  }
}

function convert_instruction_from_dto(instruction: GetRecipeInstructionDTO): InstructionsRecipe {
  return {
    id: instruction.id,
    step: instruction.step,
    comment: instruction.comment
  }
}

function convert_instruction_to_post_dto(
  instruction: InstructionsRecipesAttributes
): PostInstructionsRecipesAttributes {
  return {
    step: instruction.step,
    comment: instruction.comment,
    _destroy: instruction._destroy
  }
}
function convert_instruction_to_put_dto(
  instruction: InstructionsRecipesAttributes
): PutInstructionsRecipesAttributes {
  return {
    id: instruction.id as number,
    step: instruction.step,
    comment: instruction.comment,
    _destroy: instruction._destroy
  }
}
