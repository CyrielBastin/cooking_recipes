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
      test('All values for a PostUserDTO are present', () => {
        const user = JSON.parse(JSON.stringify(dummy_user))
        const post_user_dto = UserMapper.toPostDTO(user)

        assert.exists(post_user_dto.email)
        assert.exists(post_user_dto.password)
        assert.exists(post_user_dto.password_confirmation)
      })
      test('All values for a PostUserDTO are correct', () => {
        const user = JSON.parse(JSON.stringify(dummy_user))
        const post_user_dto = UserMapper.toPostDTO(user)

        assert.strictEqual(post_user_dto.email, user.email)
        assert.strictEqual(post_user_dto.password, user.password)
        assert.strictEqual(post_user_dto.password_confirmation, user.passwordConfirmation)
      })
    })
  })
})
