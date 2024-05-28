import { describe, test, assert } from 'vitest'
import { Validation } from '../../src/validators/validation'

const undefined_value = undefined
const null_value = null
const empty_string = ''
const string_hello = 'hello'
const number_0 = 0
const number_3 = 3
const empty_object = {}
const empty_array = []

describe('Validation', () => {
  describe('Validation.isDefined(field)', () => {
    test('returns false for value `undefined`', () => {
      assert.isFalse(Validation.isDefined(undefined_value))
    })
    test('returns true for value `null`', () => {
      assert.isTrue(Validation.isDefined(null_value))
    })
    test('returns true for value `""`', () => {
      assert.isTrue(Validation.isDefined(empty_string))
    })
    test('returns true for value `0`', () => {
      assert.isTrue(Validation.isDefined(number_0))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isDefined(string_hello))
      assert.isTrue(Validation.isDefined(number_3))
      assert.isTrue(Validation.isDefined(empty_object))
      assert.isTrue(Validation.isDefined(empty_array))
    })
  })

  describe('Validation.isNotDefined(field)', () => {
    test('returns true for value `undefined`', () => {
      assert.isTrue(Validation.isNotDefined(undefined_value))
    })
    test('returns false for value `null`', () => {
      assert.isFalse(Validation.isNotDefined(null_value))
    })
    test('returns false for value `""`', () => {
      assert.isFalse(Validation.isNotDefined(empty_string))
    })
    test('returns false for value `0`', () => {
      assert.isFalse(Validation.isNotDefined(number_0))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isNotDefined(string_hello))
      assert.isFalse(Validation.isNotDefined(number_3))
      assert.isFalse(Validation.isNotDefined(empty_object))
      assert.isFalse(Validation.isNotDefined(empty_array))
    })
  })

  describe('Validation.isNull(field)', () => {
    test('returns true for value `null`', () => {
      assert.isTrue(Validation.isNull(null_value))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isNull(undefined_value))
      assert.isFalse(Validation.isNull(empty_object))
      assert.isFalse(Validation.isNull(empty_array))
      assert.isFalse(Validation.isNull(empty_string))
      assert.isFalse(Validation.isNull(string_hello))
      assert.isFalse(Validation.isNull(number_0))
      assert.isFalse(Validation.isNull(number_3))
    })
  })

  describe('Validation.isNotNull(field)', () => {
    test('returns false for value `null`', () => {
      assert.isFalse(Validation.isNotNull(null_value))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isNotNull(undefined_value))
      assert.isTrue(Validation.isNotNull(empty_object))
      assert.isTrue(Validation.isNotNull(empty_array))
      assert.isTrue(Validation.isNotNull(empty_string))
      assert.isTrue(Validation.isNotNull(string_hello))
      assert.isTrue(Validation.isNotNull(number_0))
      assert.isTrue(Validation.isNotNull(number_3))
    })
  })

  describe('Validation.isBlank(field)', () => {
    test('returns true if value is `""`', () => {
      assert.isTrue(Validation.isBlank(empty_string))
    })
    test('returns true if value is `{}`', () => {
      assert.isTrue(Validation.isBlank(empty_object))
    })
    test('returns true if value is `[]`', () => {
      assert.isTrue(Validation.isBlank(empty_array))
    })
    test('returns true if value is `null`', () => {
      assert.isTrue(Validation.isBlank(null_value))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isBlank(undefined_value))
      assert.isFalse(Validation.isBlank(number_0))
      assert.isFalse(Validation.isBlank(number_3))
      assert.isFalse(Validation.isBlank(string_hello))
    })
  })

  describe('Validation.isNumber(field)', () => {
    test('returns true if value is a number', () => {
      assert.isTrue(Validation.isNumber(number_0))
      assert.isTrue(Validation.isNumber(number_3))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isNumber(undefined_value))
      assert.isFalse(Validation.isNumber(null_value))
      assert.isFalse(Validation.isNumber(string_hello))
      assert.isFalse(Validation.isNumber(empty_object))
      assert.isFalse(Validation.isNumber(empty_array))
    })
  })

  describe('Validation.isNotNumber(field)', () => {
    test('returns false if value is a number', () => {
      assert.isFalse(Validation.isNotNumber(number_0))
      assert.isFalse(Validation.isNotNumber(number_3))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isNotNumber(undefined_value))
      assert.isTrue(Validation.isNotNumber(null_value))
      assert.isTrue(Validation.isNotNumber(string_hello))
      assert.isTrue(Validation.isNotNumber(empty_object))
      assert.isTrue(Validation.isNotNumber(empty_array))
    })
  })

  describe('Validation.isNotInteger(field)', () => {
    test('returns false if value is an integer', () => {
      assert.isFalse(Validation.isNotInteger(number_0))
      assert.isFalse(Validation.isNotInteger(0.0))
      assert.isFalse(Validation.isNotInteger(number_3))
      assert.isFalse(Validation.isNotInteger(3.0))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isNotInteger(0.1))
      assert.isTrue(Validation.isNotInteger(3.3))
      assert.isTrue(Validation.isNotInteger(undefined_value))
      assert.isTrue(Validation.isNotInteger(null_value))
      assert.isTrue(Validation.isNotInteger(string_hello))
      assert.isTrue(Validation.isNotInteger(empty_object))
      assert.isTrue(Validation.isNotInteger(empty_array))
    })
  })

  describe('Validation.isString(field)', () => {
    test('returns true if value is a string', () => {
      assert.isTrue(Validation.isString(empty_string))
      assert.isTrue(Validation.isString(string_hello))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isString(undefined_value))
      assert.isFalse(Validation.isString(null_value))
      assert.isFalse(Validation.isString(number_0))
      assert.isFalse(Validation.isString(empty_object))
      assert.isFalse(Validation.isString(empty_array))
    })
  })

  describe('Validation.isNotString(field)', () => {
    test('returns false if value is a string', () => {
      assert.isFalse(Validation.isNotString(empty_string))
      assert.isFalse(Validation.isNotString(string_hello))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isNotString(undefined_value))
      assert.isTrue(Validation.isNotString(null_value))
      assert.isTrue(Validation.isNotString(number_0))
      assert.isTrue(Validation.isNotString(empty_object))
      assert.isTrue(Validation.isNotString(empty_array))
    })
  })

  describe('Validation.isTooLong(field, 30)', () => {
    test('returns true if value is > 30 chars', () => {
      assert.isTrue(Validation.isTooLong('tgsurheczmilqgaqumolcyyoflccmwj', 30))
    })
    test('returns false if value is 30 chars', () => {
      assert.isFalse(Validation.isTooLong('tgsurheczmilqgaqumolcyyoflccmw', 30))
    })
    test('returns false if value is < 30 chars', () => {
      assert.isFalse(Validation.isTooLong(string_hello, 30))
    })
  })

  describe('Validation.isTooLow(field, 0)', () => {
    test('returns true if value is < 0', () => {
      assert.isTrue(Validation.isTooLow(-1, 0))
    })
    test('returns false if value is 0', () => {
      assert.isFalse(Validation.isTooLow(number_0, 0))
    })
    test('returns false if value is > 0', () => {
      assert.isFalse(Validation.isTooLow(number_3, 0))
    })
  })
})
