import { describe, test, assert } from 'vitest'
import { CreateUser } from '../../src/entity/user'
import UserMapper from '../../src/entity/mappers/user_mapper'

const dummy_user: CreateUser = {
  id: 2,
  email: 'john@doe.example',
  password: '123456',
  passwordConfirmation: '123456'
}

describe('User Mapper', () => {
  describe('UserMapper.toPostDTO()', () => {
    describe('Creates a PostUserDTO from a User', () => {
      test('Check the PRESENCE of all properties', () => {
        const user: CreateUser = JSON.parse(JSON.stringify(dummy_user))
        const post_user_dto = UserMapper.toPostDTO(user)

        assert.isDefined(post_user_dto.email)
        assert.isDefined(post_user_dto.password)
        assert.isDefined(post_user_dto.password_confirmation)
      })

      test('Check the TYPE of all properties', () => {
        const user: CreateUser = JSON.parse(JSON.stringify(dummy_user))
        const post_user_dto = UserMapper.toPostDTO(user)

        assert.isString(post_user_dto.email)
        assert.isString(post_user_dto.password)
        assert.isString(post_user_dto.password_confirmation)
      })

      test('Check the VALUE of all properties', () => {
        const user: CreateUser = JSON.parse(JSON.stringify(dummy_user))
        const post_user_dto = UserMapper.toPostDTO(user)

        assert.strictEqual(post_user_dto.email, user.email)
        assert.strictEqual(post_user_dto.password, user.password)
        assert.strictEqual(post_user_dto.password_confirmation, user.passwordConfirmation)
      })
    })
  })
})
