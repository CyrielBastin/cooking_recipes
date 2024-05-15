export default interface GetArticleDTO {
  id: number
  image: string
  title: string
  content: string
  created_at: string
  updated_at: string
  user_id: number

  user: {
    id: number
    email: string
  }
}
