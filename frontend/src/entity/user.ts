export default interface User {
  id: number
  email: string
}

export interface CreateUser extends User {
  password: string
  passwordConfirmation: string
}
