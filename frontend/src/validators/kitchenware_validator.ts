import type Kitchenware from '@/models/kitchenware'
import { Validation } from './validation'

export namespace KitchenwareValidator {
  // If not valid, we append an array errors to object `kitchenware`
  // kitchenware.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(kitchenware: Partial<Kitchenware>): boolean {
    delete kitchenware.errors
    let errors: Array<Validation.ErrorMessage> = []

    const name_errors = validateName(kitchenware.name)
    const image_erros = validateImage(kitchenware.image)

    errors = errors.concat(name_errors, image_erros)
    if (errors.length > 0) kitchenware.errors = errors
    return errors.length === 0
  }

  // ======================================================================================
  // ======================================================================================
  export function validateName(name: any): Array<Validation.ErrorMessage> {
    const property = 'name'
    const max_length = 50
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

  export function validateImage(image: any): Array<Validation.ErrorMessage> {
    const property = 'image'
    const errors = []

    if (Validation.isDefined(image) && Validation.isNotNull(image)) {
      if (Validation.isNotString(image)) {
        errors.push({
          property: property,
          message: Validation.Messages.notString
        })
      }
    }

    return errors
  }
}
