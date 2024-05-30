export namespace Validation {
  export interface ErrorMessage {
    property: string
    message: string
  }

  export const Messages = {
    notDefined: 'must be defined',
    blank: "can't be blank",
    notString: 'must be a string',
    notNumber: 'must be a number',
    notInteger: 'must be an integer',
    negativeNumber: 'must be greater than 0',
    maximumLength: function (number: number) {
      return `is too long (maximum is ${number} characters)`
    },
    minimum: function (number: number) {
      return `must be greater than ${number}`
    },
    invalidEmail: "must contain only 1 '@'",
    passwordLength: 'is too short (minimum is 6 characters)',
    passwordNotMatch: "the 2 passwords don't match"
  }

  // =============================================================================
  // =============================================================================

  export function isDefined(field: any): boolean {
    return field !== undefined
  }

  export function isNotDefined(field: any): boolean {
    return !isDefined(field)
  }

  export function isNull(field: any): boolean {
    return field === null
  }

  export function isNotNull(field: any): boolean {
    return !isNull(field)
  }

  // Returns true if field is "" | {} | [] | null
  // else Returns false
  export function isBlank(field: any): boolean {
    if (typeof field === 'string') return field === ''
    if (field instanceof Object) return Object.keys(field).length === 0
    if (Array.isArray(field)) return (field as Array<any>).length === 0
    if (field === null) return true

    return false
  }

  export function isNumber(field: any): boolean {
    if (typeof field === 'number') return true

    return false
  }

  export function isNotNumber(field: any): boolean {
    return !isNumber(field)
  }

  export function isNotInteger(field: any): boolean {
    if (isNumber(field)) {
      if (Number.isInteger(field)) return false
    }

    return true
  }

  export function isString(field: any): boolean {
    if (typeof field === 'string') return true

    return false
  }

  export function isNotString(field: any): boolean {
    return !isString(field)
  }

  export function isTooLong(field: string, maximum: number): boolean {
    return field.length > maximum
  }

  export function isTooLow(field: number, minimum: number): boolean {
    return field < minimum
  }

  // Ensures that the email address has the form `test@test.com`
  // Only 1 `@` and before a `.`
  export function isInvalidEmail(field: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return !re.test(field)
  }
}
