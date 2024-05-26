import type { Validation } from '@/validators/validation'

export default interface Kitchenware {
  id: number
  image: string | null
  name: string

  errors?: Array<Validation.ErrorMessage>
}
