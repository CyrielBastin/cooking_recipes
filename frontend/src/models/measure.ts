import type { Validation } from '@/validators/validation'

export default interface Measure {
  id: number
  name: string

  errors?: Array<Validation.ErrorMessage>
}
