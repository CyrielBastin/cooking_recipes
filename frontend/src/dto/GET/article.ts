export default interface GetArticleDTO {
  id: number
  image: string
  title: string
  content: string
  created_at: Date
  updated_at: Date
  user_id: number

  user: {
    id: number
    email: string
  }
}
