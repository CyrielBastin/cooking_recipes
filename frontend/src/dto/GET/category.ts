export default interface GetCategoryDTO {
  id: number
  name: string
  parent_id?: number
  created_at: Date
  updated_at: Date

  parent?: {
    id: number
    name: string
  }
}
