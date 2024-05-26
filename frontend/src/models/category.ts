import type { Validation } from '@/validators/validation'

export default interface Category {
  id: number
  name: string
  parentId: number | null

  errors?: Array<Validation.ErrorMessage>
}
