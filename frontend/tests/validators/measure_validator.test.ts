import { describe, test, assert } from 'vitest'
import type Measure from '../../src/models/measure'
import { MeasureValidator } from '../../src/validators/measure_validator'
import { Validation } from '../../src/validators/validation'

const measure: Partial<Measure> = {
  name: 'Tablespoon'
}

describe('MeasureValidator', () => {
  describe('MeasureValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = MeasureValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = MeasureValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = MeasureValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 30 chars", () => {
      const _name = 'qfzscjtrcwsnbvrwdzzghdfcihaqgvq'
      const errors = MeasureValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(30))
    })

    test('validates a string', () => {
      const errors = MeasureValidator.validateName(measure.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('MeasureValidator.isValid(measure)', () => {
    test('returns false if not valid', () => {
      const _measure = JSON.parse(JSON.stringify(measure))
      _measure.name = null

      assert.isNotTrue(MeasureValidator.isValid(_measure))
      assert.isDefined(_measure.errors)
      assert.strictEqual(_measure.errors.length, 1)
      assert.strictEqual(_measure.errors[0].property, 'name')
      assert.strictEqual(_measure.errors[0].message, Validation.Messages.notString)

      // Makes sure it resets `measure.errors` when we check whether it is valid or not
      _measure.name = 'qfzscjtrcwsnbvrwdzzghdfcihaqgvq'
      assert.isNotTrue(MeasureValidator.isValid(_measure))
      assert.property(_measure, 'errors')
      assert.isDefined(_measure.errors)
      assert.strictEqual(_measure.errors.length, 1)
      assert.strictEqual(_measure.errors[0].property, 'name')
      assert.strictEqual(_measure.errors[0].message, Validation.Messages.maximumLength(30))
    })

    test('returns true if valid', () => {
      const _measure = JSON.parse(JSON.stringify(measure))

      assert.isTrue(MeasureValidator.isValid(_measure))
      assert.notProperty(measure, 'errors')
    })
  })
})
