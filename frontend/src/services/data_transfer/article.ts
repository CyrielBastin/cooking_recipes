import { backend_url } from '@/config/backend_config'
import type Article from '@/entity/article'
import ArticleMapper from '@/entity/mappers/article_mapper'

export default class ArticleService {
  findAll(): Array<Article> {
    let articles: Array<Article> = []
    fetch(`${backend_url}/api/articles`)
      .then((resp) => resp.json())
      .then((data) => (articles = data.map(ArticleMapper.fromGetDTO)))
      .catch((err) => console.error(err))

    return articles
  }
}
