export namespace Validation {
  export interface ErrorMessage {
    property: string
    message: string
  }

  export const Messages = {
    blank: "can't be blank",
    string: 'must be a string',
    number: 'must be a number',
    maximum_length: function (number: number) {
      return `is too long (maximum is ${number} characters)`
    },
    minimum: function (number: number) {
      return `must be greater than ${number}`
    },
    invalid_email: function (email: string) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !re.test(email)
    },
    invalid_password: 'is too short (minimum is 6 characters)'
  }

  // =============================================================================
  // =============================================================================

  export function isDefined(field: any): boolean {
    return field !== undefined
  }

  export function isNull(field: any): boolean {
    return field === null
  }

  // Returns true if field is "" | {} | [] | null
  // else Returns false
  export function isEmpty(field: any): boolean {
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

  export function isString(field: any): boolean {
    if (typeof field === 'string') return true

    return false
  }

  export function isTooLong(field: string, maximum: number): boolean {
    return field.length > maximum
  }

  export function isTooLow(field: number, minimum: number): boolean {
    return field < minimum
  }
}

export interface ErrorMessage {
  property: string
  message: string
}

export const Messages = {
  blank: "can't be blank",
  string: 'must be a string',
  number: 'must be a number',
  maximum_length: function (number: number) {
    return `is too long (maximum is ${number} characters)`
  },
  minimum: function (number: number) {
    return `must be greater than ${number}`
  },
  invalid_email: function (email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return !re.test(email)
  },
  invalid_password: 'is too short (minimum is 6 characters)'
}
