import type { Validation } from '@/validators/validation'
import type User from './user'

export default interface Article {
  id: number
  image: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  userId: number

  user?: User
}

export interface CreateOrUpdateArticle {
  image: string
  title: string
  content: string
  userId: number

  errors?: Array<Validation.ErrorMessage>
}
