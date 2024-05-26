import type { Validation } from '@/validators/validation'

export default interface User {
  id: number
  email: string

  errors?: Array<Validation.ErrorMessage>
}

export interface CreateUser extends User {
  password: string
  passwordConfirmation: string
}
