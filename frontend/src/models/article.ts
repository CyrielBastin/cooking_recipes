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
