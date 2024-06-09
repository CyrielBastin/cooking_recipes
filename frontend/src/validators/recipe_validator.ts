import type Recipe from '@/models/recipe'
import { Validation } from './validation'
import type { IngredientsRecipesAttributes, InstructionsRecipesAttributes } from '@/models/recipe'

export namespace RecipeValidator {
  // If not valid, we append an array errors to object `recipe`
  // recipe.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(recipe: Partial<Recipe>): boolean {
    delete recipe.errors
    let errors: Array<Validation.ErrorMessage> = []

    const image_errors = validateImage(recipe.image)
    const name_errors = validateName(recipe.name)
    const country_id_errors = validateCountryId(recipe.countryId)
    const category_id_errors = validateCategoryId(recipe.categoryId)
    const user_id_errors = validateUserId(recipe.userId)
    const preparation_time_errors = validatePreparationTime(recipe.preparationTime)
    const cooking_time_errors = validateCookingTime(recipe.cookingTime)
    const number_of_people_errors = validateNumberOfPeople(recipe.numberOfPeople)
    const difficulty_errors = validateDifficulty(recipe.difficulty)
    const price_errors = validatePrice(recipe.price)
    const description_errors = validateDescription(recipe.description)
    const kitchenware_errors = validateKitchenware(recipe.kitchenwareIds)
    const ingredients_valid = validateIngredients(recipe.ingredientsRecipesAttributes)
    const instructions_valid = validateInstructions(recipe.instructionsRecipesAttributes)

    errors = errors.concat(
      image_errors,
      name_errors,
      country_id_errors,
      category_id_errors,
      user_id_errors,
      preparation_time_errors,
      cooking_time_errors,
      number_of_people_errors,
      difficulty_errors,
      price_errors,
      description_errors,
      kitchenware_errors
    )
    if (errors.length > 0) recipe.errors = errors
    return errors.length === 0 && ingredients_valid && instructions_valid
  }

  // ======================================================================================
  // ======================================================================================
  export function validateImage(image: any): Array<Validation.ErrorMessage> {
    const property = 'image'
    const errors = []

    if (Validation.isNotDefined(image)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(image) && Validation.isNotString(image)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(image) && Validation.isBlank(image)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    }

    return errors
  }

  export function validateName(name: any): Array<Validation.ErrorMessage> {
    const property = 'name'
    const max_length = 100
    const errors = []

    if (Validation.isNotDefined(name)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(name) && Validation.isNotString(name)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(name) && Validation.isBlank(name)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    } else if (Validation.isString(name) && Validation.isTooLong(name, max_length)) {
      errors.push({
        property: property,
        message: Validation.Messages.maximumLength(max_length)
      })
    }

    return errors
  }

  export function validateCountryId(countryId: any): Array<Validation.ErrorMessage> {
    const property = 'countryId'
    const errors = []

    if (Validation.isDefined(countryId) && Validation.isNotNull(countryId)) {
      if (Validation.isNotNumber(countryId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(countryId) && Validation.isNotInteger(countryId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (countryId < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateCategoryId(categoryId: any): Array<Validation.ErrorMessage> {
    const property = 'categoryId'
    const errors = []

    if (Validation.isNotDefined(categoryId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(categoryId) && Validation.isNotNumber(categoryId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notNumber
      })
    } else if (Validation.isNumber(categoryId) && Validation.isNotInteger(categoryId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notInteger
      })
    } else if (categoryId < 1) {
      errors.push({
        property: property,
        message: Validation.Messages.negativeNumber
      })
    }

    return errors
  }

  export function validateUserId(userId: any): Array<Validation.ErrorMessage> {
    const property = 'userId'
    const errors = []

    if (Validation.isNotDefined(userId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(userId) && Validation.isNotNumber(userId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notNumber
      })
    } else if (Validation.isNumber(userId) && Validation.isNotInteger(userId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notInteger
      })
    } else if (userId < 1) {
      errors.push({
        property: property,
        message: Validation.Messages.negativeNumber
      })
    }

    return errors
  }

  export function validatePreparationTime(preparationTime: any): Array<Validation.ErrorMessage> {
    const property = 'preparationTime'
    const errors = []

    if (Validation.isDefined(preparationTime) && Validation.isNotNull(preparationTime)) {
      if (Validation.isNotNumber(preparationTime)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(preparationTime) && Validation.isNotInteger(preparationTime)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (preparationTime < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateCookingTime(cookingTime: any): Array<Validation.ErrorMessage> {
    const property = 'cookingTime'
    const errors = []

    if (Validation.isDefined(cookingTime) && Validation.isNotNull(cookingTime)) {
      if (Validation.isNotNumber(cookingTime)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(cookingTime) && Validation.isNotInteger(cookingTime)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (cookingTime < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateNumberOfPeople(numberOfPeople: any): Array<Validation.ErrorMessage> {
    const property = 'numberOfPeople'
    const errors = []

    if (Validation.isDefined(numberOfPeople) && Validation.isNotNull(numberOfPeople)) {
      if (Validation.isNotNumber(numberOfPeople)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(numberOfPeople) && Validation.isNotInteger(numberOfPeople)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (numberOfPeople < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateDifficulty(difficulty: any): Array<Validation.ErrorMessage> {
    const property = 'difficulty'
    const accepted_values = ['easy', 'normal', 'hard']
    const errors = []

    if (!accepted_values.includes(difficulty)) {
      errors.push({
        property: property,
        message: `must have value: ${accepted_values.join(' | ')}`
      })
    }

    return errors
  }

  export function validatePrice(price: any): Array<Validation.ErrorMessage> {
    const property = 'price'
    const accepted_values = ['low', 'medium', 'high']
    const errors = []

    if (!accepted_values.includes(price)) {
      errors.push({
        property: property,
        message: `must have value: ${accepted_values.join(' | ')}`
      })
    }

    return errors
  }

  export function validateDescription(description: any): Array<Validation.ErrorMessage> {
    const property = 'description'
    const errors = []

    if (Validation.isDefined(description) && Validation.isNotNull(description)) {
      if (Validation.isNotString(description)) {
        errors.push({
          property: property,
          message: Validation.Messages.notString
        })
      }
    }

    return errors
  }

  export function validateKitchenware(kitchenwareIds: any): Array<Validation.ErrorMessage> {
    const property = 'kitchenwareIds'
    const errors = []

    if (Validation.isDefined(kitchenwareIds)) {
      if (Validation.isNotArray(kitchenwareIds)) {
        errors.push({
          property: property,
          message: Validation.Messages.notArray
        })
      } else if (
        Validation.isArray(kitchenwareIds) &&
        Validation.isNotArrayOfPositiveInt(kitchenwareIds)
      ) {
        errors.push({
          property: property,
          message: 'must contain only strictly positive integer'
        })
      }
    }

    return errors
  }

  // ============================================================================================
  export function validateIngredients(
    ingredients: Array<IngredientsRecipesAttributes> | undefined
  ): boolean {
    let is_valid = true

    if (Validation.isDefined(ingredients)) {
      ingredients?.forEach((ingredient) => {
        let errors: Array<Validation.ErrorMessage> = []
        const ingredient_id_errros = validateIngredientId(ingredient.ingredientId)
        const ingredient_quantity_errors = validateIngredientQuantity(ingredient.quantity)
        const ingredient_measure_id_errors = validateIngredientMeasureId(ingredient.measureId)
        const ingredient_comment_errors = validateIngredientComment(ingredient.comment)
        const ingredient_destroy_errors = validateIngredientDestroy(ingredient._destroy)

        errors = errors.concat(
          ingredient_id_errros,
          ingredient_quantity_errors,
          ingredient_measure_id_errors,
          ingredient_comment_errors,
          ingredient_destroy_errors
        )

        ingredient.errors = errors
        if (ingredient.errors.length > 0) is_valid = false
      })
    }

    return is_valid
  }

  export function validateIngredientId(ingredientId: any): Array<Validation.ErrorMessage> {
    const property = 'ingredientId'
    const errors = []

    if (Validation.isNotDefined(ingredientId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(ingredientId) && Validation.isNotNumber(ingredientId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notNumber
      })
    } else if (Validation.isNumber(ingredientId) && Validation.isNotInteger(ingredientId)) {
      errors.push({
        property: property,
        message: Validation.Messages.notInteger
      })
    } else if (ingredientId < 1) {
      errors.push({
        property: property,
        message: Validation.Messages.negativeNumber
      })
    }

    return errors
  }

  export function validateIngredientQuantity(quantity: any): Array<Validation.ErrorMessage> {
    const property = 'quantity'
    const errors = []

    if (Validation.isDefined(quantity) && Validation.isNotNull(quantity)) {
      if (Validation.isNotNumber(quantity)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(quantity) && Validation.isNotInteger(quantity)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (quantity < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateIngredientMeasureId(measureId: any): Array<Validation.ErrorMessage> {
    const property = 'measureId'
    const errors = []

    if (Validation.isDefined(measureId) && Validation.isNotNull(measureId)) {
      if (Validation.isNotNumber(measureId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(measureId) && Validation.isNotInteger(measureId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (measureId < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }

  export function validateIngredientComment(comment: any): Array<Validation.ErrorMessage> {
    const property = 'comment'
    const errors = []

    if (Validation.isDefined(comment) && Validation.isNotNull(comment)) {
      if (Validation.isNotString(comment)) {
        errors.push({
          property: property,
          message: Validation.Messages.notString
        })
      }
    }

    return errors
  }

  export function validateIngredientDestroy(destroy: any): Array<Validation.ErrorMessage> {
    const property = '_destroy'
    const errors = []

    if (Validation.isDefined(destroy)) {
      if (destroy != 1) {
        errors.push({
          property: property,
          message: 'must have value 1'
        })
      }
    }

    return errors
  }

  // ============================================================================================
  export function validateInstructions(
    instructions: Array<InstructionsRecipesAttributes> | undefined
  ): boolean {
    let is_valid = true

    if (Validation.isDefined(instructions)) {
      instructions?.forEach((instruction) => {
        let errors: Array<Validation.ErrorMessage> = []
        const instruction_step_errors = validateInstructionStep(instruction.step)
        const instruction_comment_errors = validateInstructionComment(instruction.comment)
        const instruction_destroy_errors = validateInstructionDestroy(instruction._destroy)

        errors = errors.concat(
          instruction_step_errors,
          instruction_comment_errors,
          instruction_destroy_errors
        )

        instruction.errors = errors
        if (instruction.errors.length > 0) is_valid = false
      })
    }

    return is_valid
  }

  export function validateInstructionStep(step: any): Array<Validation.ErrorMessage> {
    const property = 'step'
    const errors = []

    if (Validation.isNotDefined(step)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(step) && Validation.isNotNumber(step)) {
      errors.push({
        property: property,
        message: Validation.Messages.notNumber
      })
    } else if (Validation.isNumber(step) && Validation.isNotInteger(step)) {
      errors.push({
        property: property,
        message: Validation.Messages.notInteger
      })
    } else if (step < 1) {
      errors.push({
        property: property,
        message: Validation.Messages.negativeNumber
      })
    }

    return errors
  }

  export function validateInstructionComment(comment: any): Array<Validation.ErrorMessage> {
    const property = 'comment'
    const errors = []

    if (Validation.isNotDefined(comment)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(comment) && Validation.isNotString(comment)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(comment) && Validation.isBlank(comment)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    }

    return errors
  }

  export function validateInstructionDestroy(destroy: any): Array<Validation.ErrorMessage> {
    const property = '_destroy'
    const errors = []

    if (Validation.isDefined(destroy)) {
      if (destroy != 1) {
        errors.push({
          property: property,
          message: 'must have value 1'
        })
      }
    }

    return errors
  }
}
