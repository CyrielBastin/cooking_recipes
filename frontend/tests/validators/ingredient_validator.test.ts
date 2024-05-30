import { describe, test, assert } from 'vitest'
import type Ingredient from '../../src/models/ingredient'
import { IngredientValidator } from '../../src/validators/ingredient_validator'
import { Validation } from '../../src/validators/validation'

const ingredient: Partial<Ingredient> = {
  name: 'Parsley',
  image: 'parsley.png'
}

describe('IngredientValidator', () => {
  describe('IngredientValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = IngredientValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = IngredientValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = IngredientValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 50 chars", () => {
      const _name = 'lhceaqtztvlsbbzolzfzqfzscjtrcwsnbvrwdzzghdfcihaqgvq'
      const errors = IngredientValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(50))
    })

    test('validates a string', () => {
      const errors = IngredientValidator.validateName(ingredient.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('IngredientValidator.validateImage(image)', () => {
    test('validates `undefined`', () => {
      const _image = undefined
      const errors = IngredientValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _image = null
      const errors = IngredientValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non-string", () => {
      const _image = 5
      const errors = IngredientValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test('validates an empty string', () => {
      const _image = ''
      const errors = IngredientValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates a string', () => {
      const errors = IngredientValidator.validateImage(ingredient.image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('IngredientValidator.isValid(ingredient)', () => {
    test('returns false if not valid', () => {
      const _ingredient = JSON.parse(JSON.stringify(ingredient))
      _ingredient.name = null
      _ingredient.image = -1

      assert.isNotTrue(IngredientValidator.isValid(_ingredient))
      assert.isDefined(_ingredient.errors)
      assert.strictEqual(_ingredient.errors.length, 2)
      assert.strictEqual(_ingredient.errors[0].property, 'name')
      assert.strictEqual(_ingredient.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_ingredient.errors[1].property, 'image')
      assert.strictEqual(_ingredient.errors[1].message, Validation.Messages.notString)

      // Makes sure it resets `ingredient.errors` when we check whether it is valid or not
      _ingredient.image = ''
      assert.isNotTrue(IngredientValidator.isValid(_ingredient))
      assert.property(_ingredient, 'errors')
      assert.isDefined(_ingredient.errors)
      assert.strictEqual(_ingredient.errors.length, 1)
      assert.strictEqual(_ingredient.errors[0].property, 'name')
      assert.strictEqual(_ingredient.errors[0].message, Validation.Messages.notString)
    })

    test('returns true if valid', () => {
      const _ingredient = JSON.parse(JSON.stringify(ingredient))

      assert.isTrue(IngredientValidator.isValid(_ingredient))
      assert.notProperty(ingredient, 'errors')
    })
  })
})
