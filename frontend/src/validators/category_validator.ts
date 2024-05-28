import type Category from '@/models/category'
import { Validation } from './validation'

export namespace CategoryValidator {
  // If not valid, we append an array errors to object `category`
  // category.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(category: Partial<Category>): boolean {
    delete category.errors
    let errors: Array<Validation.ErrorMessage> = []

    const name_errors = validateName(category.name)
    const parent_id_erros = validateParentId(category.parentId)

    errors = errors.concat(name_errors, parent_id_erros)
    if (errors.length > 0) category.errors = errors
    return errors.length === 0
  }

  // ======================================================================================
  // ======================================================================================
  export function validateName(name: any): Array<Validation.ErrorMessage> {
    const property = 'name'
    const max_length = 30
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

  export function validateParentId(parentId: any): Array<Validation.ErrorMessage> {
    const property = 'parentId'
    const errors = []

    if (Validation.isDefined(parentId) && Validation.isNotNull(parentId)) {
      if (Validation.isNotNumber(parentId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notNumber
        })
      } else if (Validation.isNumber(parentId) && Validation.isNotInteger(parentId)) {
        errors.push({
          property: property,
          message: Validation.Messages.notInteger
        })
      } else if (parentId < 1) {
        errors.push({
          property: property,
          message: Validation.Messages.negativeNumber
        })
      }
    }

    return errors
  }
}
