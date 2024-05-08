import type PostUserDTO from '@/dto/POST/user'
import type { CreateUser } from '../user'

export default class UserMapper {
  static toPostDTO(user: CreateUser): PostUserDTO {
    return {
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation
    }
  }
}
