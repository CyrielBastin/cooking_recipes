import { describe, test, assert } from 'vitest'
import type Kitchenware from '../../src/models/kitchenware'
import { KitchenwareValidator } from '../../src/validators/kitchenware_validator'
import { Validation } from '../../src/validators/validation'

const kitchenware: Partial<Kitchenware> = {
  name: 'Parsley',
  image: 'parsley.png'
}

describe('KitchenwareValidator', () => {
  describe('KitchenwareValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = KitchenwareValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = KitchenwareValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = KitchenwareValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 50 chars", () => {
      const _name = 'lhceaqtztvlsbbzolzfzqfzscjtrcwsnbvrwdzzghdfcihaqgvq'
      const errors = KitchenwareValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(50))
    })

    test('validates a string', () => {
      const errors = KitchenwareValidator.validateName(kitchenware.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('KitchenwareValidator.validateImage(image)', () => {
    test('validates `undefined`', () => {
      const _image = undefined
      const errors = KitchenwareValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _image = null
      const errors = KitchenwareValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non-string", () => {
      const _image = 5
      const errors = KitchenwareValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test('validates an empty string', () => {
      const _image = ''
      const errors = KitchenwareValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates a string', () => {
      const errors = KitchenwareValidator.validateImage(kitchenware.image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('KitchenwareValidator.isValid(kitchenware)', () => {
    test('returns false if not valid', () => {
      const _kitchenware = JSON.parse(JSON.stringify(kitchenware))
      _kitchenware.name = null
      _kitchenware.image = -1

      assert.isNotTrue(KitchenwareValidator.isValid(_kitchenware))
      assert.isDefined(_kitchenware.errors)
      assert.strictEqual(_kitchenware.errors.length, 2)
      assert.strictEqual(_kitchenware.errors[0].property, 'name')
      assert.strictEqual(_kitchenware.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_kitchenware.errors[1].property, 'image')
      assert.strictEqual(_kitchenware.errors[1].message, Validation.Messages.notString)

      // Makes sure it resets `kitchenware.errors` when we check whether it is valid or not
      _kitchenware.image = ''
      assert.isNotTrue(KitchenwareValidator.isValid(_kitchenware))
      assert.property(_kitchenware, 'errors')
      assert.isDefined(_kitchenware.errors)
      assert.strictEqual(_kitchenware.errors.length, 1)
      assert.strictEqual(_kitchenware.errors[0].property, 'name')
      assert.strictEqual(_kitchenware.errors[0].message, Validation.Messages.notString)
    })

    test('returns true if valid', () => {
      const _kitchenware = JSON.parse(JSON.stringify(kitchenware))

      assert.isTrue(KitchenwareValidator.isValid(_kitchenware))
      assert.notProperty(kitchenware, 'errors')
    })
  })
})
