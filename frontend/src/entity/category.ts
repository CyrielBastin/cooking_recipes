export default interface Category {
  id: number
  name: string
  parentId?: number
  parent?: Category
}
