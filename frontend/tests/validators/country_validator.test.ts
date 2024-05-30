import { describe, test, assert } from 'vitest'
import type Country from '../../src/models/country'
import { CountryValidator } from '../../src/validators/country_validator'
import { Validation } from '../../src/validators/validation'

const country: Partial<Country> = {
  name: 'Greece',
  image: 'greece.png'
}

describe('CountryValidator', () => {
  describe('CountryValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = CountryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = CountryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = CountryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 100 chars", () => {
      const _name =
        'svrneypjttoeacqeiqbjovwglxlkqmapciexpnaretenrqlltgmpqksycnenkhclolmfqzvomkphgxjdizhjgnxliskbmpvonuywb'
      const errors = CountryValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(100))
    })

    test('validates a string', () => {
      const errors = CountryValidator.validateName(country.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('CountryValidator.validateImage(image)', () => {
    test('validates `undefined`', () => {
      const _image = undefined
      const errors = CountryValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _image = null
      const errors = CountryValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non-string", () => {
      const _image = {}
      const errors = CountryValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test('validates an empty string', () => {
      const _image = ''
      const errors = CountryValidator.validateImage(_image)
      assert.strictEqual(errors.length, 0)
    })

    test('validates a string', () => {
      const errors = CountryValidator.validateImage(country.image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('CountryValidator.isValid(country)', () => {
    test('returns false if not valid', () => {
      const _country = JSON.parse(JSON.stringify(country))
      _country.name = null
      _country.image = -1

      assert.isNotTrue(CountryValidator.isValid(_country))
      assert.isDefined(_country.errors)
      assert.strictEqual(_country.errors.length, 2)
      assert.strictEqual(_country.errors[0].property, 'name')
      assert.strictEqual(_country.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_country.errors[1].property, 'image')
      assert.strictEqual(_country.errors[1].message, Validation.Messages.notString)

      // Makes sure it resets `country.errors` when we check whether it is valid or not
      _country.image = null
      assert.isNotTrue(CountryValidator.isValid(_country))
      assert.property(_country, 'errors')
      assert.isDefined(_country.errors)
      assert.strictEqual(_country.errors.length, 1)
      assert.strictEqual(_country.errors[0].property, 'name')
      assert.strictEqual(_country.errors[0].message, Validation.Messages.notString)
    })

    test('returns true if valid', () => {
      const _country = JSON.parse(JSON.stringify(country))

      assert.isTrue(CountryValidator.isValid(_country))
      assert.notProperty(country, 'errors')
    })
  })
})
