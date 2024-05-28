import type Article from '@/models/article'
import { Validation } from './validation'

export namespace ArticleValidator {
  // If not valid, we append an array errors to object `article`
  // article.errors
  //   ==> [{ property: string, message: string }, { property: string, message: string}]
  export function isValid(article: Partial<Article>): boolean {
    delete article.errors
    let errors: Array<Validation.ErrorMessage> = []

    const title_errors = validateTitle(article.title)
    const image_erros = validateImage(article.image)
    const content_errors = validateContent(article.content)
    const user_id_errors = validateUserId(article.userId)

    errors = errors.concat(title_errors, image_erros, content_errors, user_id_errors)
    if (errors.length > 0) article.errors = errors
    return errors.length === 0
  }

  // ======================================================================================
  // ======================================================================================
  export function validateTitle(title: any): Array<Validation.ErrorMessage> {
    const property = 'title'
    const max_length = 150
    const errors = []

    if (Validation.isNotDefined(title)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(title) && Validation.isNotString(title)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(title) && Validation.isBlank(title)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
      })
    } else if (Validation.isString(title) && Validation.isTooLong(title, max_length)) {
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

  export function validateContent(content: any): Array<Validation.ErrorMessage> {
    const property = 'content'
    const errors = []

    if (Validation.isNotDefined(content)) {
      errors.push({
        property: property,
        message: Validation.Messages.notDefined
      })
    } else if (Validation.isDefined(content) && Validation.isNotString(content)) {
      errors.push({
        property: property,
        message: Validation.Messages.notString
      })
    } else if (Validation.isString(content) && Validation.isBlank(content)) {
      errors.push({
        property: property,
        message: Validation.Messages.blank
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
}
