import { describe, test, assert } from 'vitest'
import type { CreateUser } from '../../src/models/user'
import { UserValidator } from '../../src/validators/user_validator'
import { Validation } from '../../src/validators/validation'

const user: Partial<CreateUser> = {
  email: 'john@doe.com',
  password: '123456',
  passwordConfirmation: '123456'
}

describe('UserValidator', () => {
  describe('UserValidator.validateEmail(email)', () => {
    test("doesn't validate `undefined`", () => {
      const _email = undefined
      const errors = UserValidator.validateEmail(_email)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'email')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _email = 0
      const errors = UserValidator.validateEmail(_email)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'email')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _email = ''
      const errors = UserValidator.validateEmail(_email)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'email')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    describe('Validates a string', () => {
      test("doesn't validate if no `@`", () => {
        const _email = 'abcdef'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test("doesn't validate if more than 1 `@`", () => {
        const _email = 'test@test@example.com'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test("doesn't validate if starts with `@`", () => {
        const _email = '@test.com'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test("doesn't validate if ends with `@`", () => {
        const _email = 'test.com@'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test("doesn't validate if no `.`", () => {
        const _email = 'abcdef@test'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test("doesn't validate if `@` after a `.`", () => {
        const _email = 'test.test@com'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'email')
        assert.strictEqual(errors[0].message, Validation.Messages.invalidEmail)
      })
      test('validates if `@` is in the middle', () => {
        const _email = 'test@test.com'
        const errors = UserValidator.validateEmail(_email)
        assert.strictEqual(errors.length, 0)
      })
    })
  })

  describe('UserValidator.validatePassword(password)', () => {
    test("doesn't validate `undefined`", () => {
      const _password = undefined
      const errors = UserValidator.validatePassword(_password)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'password')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _password = null
      const errors = UserValidator.validatePassword(_password)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'password')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _password = ''
      const errors = UserValidator.validatePassword(_password)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'password')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string < 6", () => {
      const _password = '12345'
      const errors = UserValidator.validatePassword(_password)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'password')
      assert.strictEqual(errors[0].message, Validation.Messages.passwordLength)
    })

    test('validates a string', () => {
      const errors = UserValidator.validatePassword(user.password)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('UserValidator.validatePasswordMatch(password, password_confirmation)', () => {
    test("doesn't validate if they are different", () => {
      const _password = '123456'
      const _password_confirmation = 'abcdef'
      const errors = UserValidator.validatePasswordMatch(_password, _password_confirmation)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'password')
      assert.strictEqual(errors[0].message, Validation.Messages.passwordNotMatch)
    })

    test('validates if they are the same', () => {
      const _password = '123456'
      const _password_confirmation = '123456'
      const errors = UserValidator.validatePasswordMatch(_password, _password_confirmation)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('UserValidator.isValid(user)', () => {
    test('returns false if not valid', () => {
      const _user = JSON.parse(JSON.stringify(user))
      _user.email = null
      _user.password = 'abcdef'

      assert.isNotTrue(UserValidator.isValid(_user))
      assert.isDefined(_user.errors)
      assert.strictEqual(_user.errors.length, 2)
      assert.strictEqual(_user.errors[0].property, 'email')
      assert.strictEqual(_user.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_user.errors[1].property, 'password')
      assert.strictEqual(_user.errors[1].message, Validation.Messages.passwordNotMatch)

      // Makes sure it resets `user.errors` when we check whether it is valid or not
      _user.password = '123456'
      _user.email = 'not.valid@email'
      assert.isNotTrue(UserValidator.isValid(_user))
      assert.property(_user, 'errors')
      assert.isDefined(_user.errors)
      assert.strictEqual(_user.errors.length, 1)
      assert.strictEqual(_user.errors[0].property, 'email')
      assert.strictEqual(_user.errors[0].message, Validation.Messages.invalidEmail)
    })

    test('returns true if valid', () => {
      const _user = JSON.parse(JSON.stringify(user))

      assert.isTrue(UserValidator.isValid(_user))
      assert.notProperty(_user, 'errors')
    })
  })
})
