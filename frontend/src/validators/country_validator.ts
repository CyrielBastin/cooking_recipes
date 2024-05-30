import type Country from '@/models/country'
import { Validation } from './validation'

export namespace CountryValidator {
  // If not valid, we append an array errors to object `country`
  // country.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(country: Partial<Country>): boolean {
    delete country.errors
    let errors: Array<Validation.ErrorMessage> = []

    const name_errors = validateName(country.name)
    const image_erros = validateImage(country.image)

    errors = errors.concat(name_errors, image_erros)
    if (errors.length > 0) country.errors = errors
    return errors.length === 0
  }

  // ======================================================================================
  // ======================================================================================
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
