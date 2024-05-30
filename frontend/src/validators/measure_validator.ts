import type Measure from '@/models/measure'
import { Validation } from './validation'

export namespace MeasureValidator {
  // If not valid, we append an array errors to object `measure`
  // measure.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(measure: Partial<Measure>): boolean {
    delete measure.errors
    let errors: Array<Validation.ErrorMessage> = []

    const name_errors = validateName(measure.name)

    errors = errors.concat(name_errors)
    if (errors.length > 0) measure.errors = errors
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
}
