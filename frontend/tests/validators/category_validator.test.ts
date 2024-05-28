import { describe, test, assert } from 'vitest'
import type Category from '../../src/models/category'
import { CategoryValidator } from '../../src/validators/category_validator'
import { Validation } from '../../src/validators/validation'

const category: Partial<Category> = {
  name: 'Lamb Sauces',
  parentId: 4
}

describe('CategoryValidator', () => {
  describe('CategoryValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = CategoryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = CategoryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = CategoryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 30 chars", () => {
      const _name = 'qvucmhglmtjqqghvmcwdvahnyjlzzet'
      const errors = CategoryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(30))
    })

    test('validates a string', () => {
      const errors = CategoryValidator.validateName(category.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('CategoryValidator.validateParentId(parentId)', () => {
    test('validates `undefined`', () => {
      const _parent_id = undefined
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _parent_id = null
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non number", () => {
      const _parent_id = ''
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'parentId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _parent_id = 1.1
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'parentId')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _parent_id = -1
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'parentId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _parent_id = 0
      const errors = CategoryValidator.validateParentId(_parent_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'parentId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = CategoryValidator.validateParentId(category.parentId)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('CategoryValidator.isValid(category)', () => {
    test('returns false if not valid', () => {
      const _category = JSON.parse(JSON.stringify(category))
      _category.name = null
      _category.parentId = -1

      assert.isNotTrue(CategoryValidator.isValid(_category))
      assert.isDefined(_category.errors)
      assert.strictEqual(_category.errors.length, 2)
      assert.strictEqual(_category.errors[0].property, 'name')
      assert.strictEqual(_category.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_category.errors[1].property, 'parentId')
      assert.strictEqual(_category.errors[1].message, Validation.Messages.negativeNumber)

      // Makes sure it resets `category.errors` when we check whether it is valid or not
      _category.parentId = 1
      assert.isNotTrue(CategoryValidator.isValid(_category))
      assert.property(_category, 'errors')
      assert.isDefined(_category.errors)
      assert.strictEqual(_category.errors.length, 1)
      assert.strictEqual(_category.errors[0].property, 'name')
      assert.strictEqual(_category.errors[0].message, Validation.Messages.notString)
    })

    test('returns true if valid', () => {
      const _category = JSON.parse(JSON.stringify(category))

      assert.isTrue(CategoryValidator.isValid(_category))
      assert.notProperty(category, 'errors')
    })
  })
})
