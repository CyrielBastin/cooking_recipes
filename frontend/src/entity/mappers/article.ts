import type PostArticleDTO from '@/dto/POST/article'
import type GetArticleDTO from '../../dto/GET/article'
import type Article from '../article'
import type PutArticleDTO from '@/dto/PUT/article'

export default class ArticleMapper {
  static fromGetDTO(article_dto: GetArticleDTO): Article {
    return {
      id: article_dto.id,
      image: article_dto.image,
      title: article_dto.title,
      content: article_dto.content,
      createdAt: article_dto.created_at,
      updatedAt: article_dto.updated_at,
      userId: article_dto.user_id,
      user: {
        id: article_dto.user.id,
        email: article_dto.user.email
      }
    }
  }

  static toPostDTO(article: Article): PostArticleDTO {
    return {
      image: article.image,
      title: article.title,
      content: article.content,
      user_id: article.userId
    }
  }

  static toPutDTO(article: Article): PutArticleDTO {
    return {
      id: article.id,
      image: article.image,
      title: article.title,
      content: article.content,
      user_id: article.userId
    }
  }
}
