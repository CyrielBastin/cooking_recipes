import { describe, test, assert } from 'vitest'
import { ArticleValidator } from '../../src/validators/article_validator'
import { Validation } from '../../src/validators/validation'
import { CreateOrUpdateArticle } from '../../src/models/article'

const title = 'My New Article'
const image = 'my_new_article.png'
const content = 'Awesome Content'
const user_id = 1
const article: CreateOrUpdateArticle = {
  title: title,
  image: image,
  content: content,
  userId: user_id
}

describe('ArticleValidator', () => {
  describe('ArticleValidator.validateTitle(title)', () => {
    test("doesn't validate `undefined`", () => {
      const _title = undefined
      const errors = ArticleValidator.validateTitle(_title)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'title')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _title = 0
      const errors = ArticleValidator.validateTitle(_title)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'title')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _title = ''
      const errors = ArticleValidator.validateTitle(_title)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'title')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 150 chars", () => {
      const _title =
        'qvucmhglmtjqqghvmcwdvahnyjlzzetnvvjkvpvfdcqhfpcfywswckzaamoquspfcrkefkbgimmxlqjiqsywjhyicttopnylypvlkzmfmwxjbkhqdhfdbzhyfmkmyopreopvmpmjaubbahrteudchmm'
      const errors = ArticleValidator.validateTitle(_title)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'title')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(150))
    })

    test('validates a string', () => {
      const errors = ArticleValidator.validateTitle(title)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('ArticleValidator.validateImage(image)', () => {
    test("doesn't validate `undefined`", () => {
      const _image = undefined
      const errors = ArticleValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _image = null
      const errors = ArticleValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _image = ''
      const errors = ArticleValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test('validates a string', () => {
      const errors = ArticleValidator.validateImage(image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('ArticleValidator.validateContent(content)', () => {
    test("doesn't validate `undefined`", () => {
      const _content = undefined
      const errors = ArticleValidator.validateContent(_content)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'content')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _content = null
      const errors = ArticleValidator.validateContent(_content)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'content')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _content = ''
      const errors = ArticleValidator.validateContent(_content)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'content')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test('validates a string', () => {
      const errors = ArticleValidator.validateContent(content)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('ArticleValidator.validateUserId(userId)', () => {
    test("doesn't validate `undefined`", () => {
      const _user_id = undefined
      const errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non number", () => {
      let _user_id: any = null
      let errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)

      _user_id = 'not number'
      errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _user_id = 1.1
      const errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _user_id = -1
      const errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _user_id = 0
      const errors = ArticleValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = ArticleValidator.validateUserId(user_id)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('ArticleValidator.isValid(article)', () => {
    test('returns false if not valid', () => {
      const _article = JSON.parse(JSON.stringify(article))
      _article.title = null
      _article.userId = -1

      assert.isNotTrue(ArticleValidator.isValid(_article))
      assert.isDefined(_article.errors)
      assert.strictEqual(_article.errors.length, 2)
      assert.strictEqual(_article.errors[0].property, 'title')
      assert.strictEqual(_article.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_article.errors[1].property, 'userId')
      assert.strictEqual(_article.errors[1].message, Validation.Messages.negativeNumber)

      // Makes sure it resets `article.errors` when we check whether it is valid or not
      _article.userId = 1
      assert.isNotTrue(ArticleValidator.isValid(_article))
      assert.isDefined(_article.errors)
      assert.strictEqual(_article.errors.length, 1)
      assert.strictEqual(_article.errors[0].property, 'title')
      assert.strictEqual(_article.errors[0].message, Validation.Messages.notString)
    })

    test('returns true if valid', () => {
      const _article = JSON.parse(JSON.stringify(article))

      assert.isTrue(ArticleValidator.isValid(_article))
    })
  })
})
