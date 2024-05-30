import type { CreateUser } from '@/models/user'
import { Validation } from './validation'

export namespace UserValidator {
  // If not valid, we append an array errors to object `user`
  // user.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(user: Partial<CreateUser>): boolean {
    delete user.errors
    let errors: Array<Validation.ErrorMessage> = []

    const email_errors = validateEmail(user.email)
    const password_erros = validatePassword(user.password)
    const password_match_errors = validatePasswordMatch(
      user.password as string,
      user.passwordConfirmation as string
    )

    errors = errors.concat(email_errors, password_erros, password_match_errors)
    if (errors.length > 0) user.errors = errors
    return errors.length === 0
  }

  // ======================================================================================
  // ======================================================================================
  export function validateEmail(email: any): Array<Validation.ErrorMessage> {
    const property = 'email'
    const errors = []

    if (Validation.isNotDefined(email)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(email) && Validation.isNotString(email)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(email) && Validation.isBlank(email)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    } else if (Validation.isString(email) && Validation.isInvalidEmail(email)) {
      errors.push({
        property: property,
        message: Validation.Messages.invalidEmail
      })
    }

    return errors
  }

  export function validatePassword(password: any): Array<Validation.ErrorMessage> {
    const property = 'password'
    const errors = []

    if (Validation.isNotDefined(password)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(password) && Validation.isNotString(password)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(password) && Validation.isBlank(password)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    } else if (Validation.isString(password) && password.length < 6) {
      errors.push({
        property: property,
        message: Validation.Messages.passwordLength
      })
    }

    return errors
  }

  export function validatePasswordMatch(
    password: string,
    password_confirmation: string
  ): Array<Validation.ErrorMessage> {
    const property = 'password'
    const errors = []

    if (password !== password_confirmation) {
      errors.push({
        property: property,
        message: Validation.Messages.passwordNotMatch
      })
    }

    return errors
  }
}
