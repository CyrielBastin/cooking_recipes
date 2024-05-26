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
    test('returns true for value `""`', () => {
      assert.isTrue(Validation.isDefined(number_0))
    })
    test('returns true for other values', () => {
      assert.isTrue(Validation.isDefined(string_hello))
      assert.isTrue(Validation.isDefined(number_3))
      assert.isTrue(Validation.isDefined(empty_object))
      assert.isTrue(Validation.isDefined(empty_array))
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

  describe('Validation.isEmpty(field)', () => {
    test('returns true if value is `""`', () => {
      assert.isTrue(Validation.isEmpty(empty_string))
    })
    test('returns true if value is `{}`', () => {
      assert.isTrue(Validation.isEmpty(empty_object))
    })
    test('returns true if value is `[]`', () => {
      assert.isTrue(Validation.isEmpty(empty_array))
    })
    test('returns true if value is `null`', () => {
      assert.isTrue(Validation.isEmpty(null_value))
    })
    test('returns false for other values', () => {
      assert.isFalse(Validation.isEmpty(undefined_value))
      assert.isFalse(Validation.isEmpty(number_0))
      assert.isFalse(Validation.isEmpty(number_3))
      assert.isFalse(Validation.isEmpty(string_hello))
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
