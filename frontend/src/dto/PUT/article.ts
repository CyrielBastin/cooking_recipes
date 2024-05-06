import type PostArticleDTO from '../POST/article'

export default interface PutArticleDTO extends PostArticleDTO {
  id: number
}
