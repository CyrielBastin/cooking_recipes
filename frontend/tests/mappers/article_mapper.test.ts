import { describe, test, assert } from 'vitest'
import GetArticleDTO from '../../src/dto/GET/article'
import Article from '../../src/entity/article'
import ArticleMapper from '../../src/entity/mappers/article_mapper'

const dummy_get_article_dto: GetArticleDTO = {
  id: 1,
  image: 'articles/first_article.png',
  title: 'My first Article',
  content: 'Awesome Content',
  user_id: 1,
  created_at: '2024-05-10 15:26:14',
  updated_at: '2024-05-10 15:28:45',
  user: {
    id: 1,
    email: 'john@doe.example'
  }
}
const dummy_article: Article = {
  id: 2,
  image: 'articles/second_article.png',
  title: 'My second Article',
  content: 'EXTRA Awesome Content',
  userId: 2,
  createdAt: new Date('2024-05-10 15:35:20'),
  updatedAt: new Date('2024-05-10 15:40:00'),
  user: {
    id: 2,
    email: 'jane@doe.example'
  }
}

describe('Article Mapper', () => {
  describe('ArticleMapper.fromGetDTO()', () => {
    describe('Creates an Article from GetArticleDTO', () => {
      test('Check the PRESENCE of the properties', () => {
        const get_article_dto: GetArticleDTO = JSON.parse(JSON.stringify(dummy_get_article_dto))
        const article = ArticleMapper.fromGetDTO(get_article_dto)

        assert.isDefined(article.id)
        assert.isDefined(article.image)
        assert.isDefined(article.title)
        assert.isDefined(article.content)
        assert.isDefined(article.userId)
        assert.isDefined(article.createdAt)
        assert.isDefined(article.updatedAt)
        assert.isDefined(article.user)
      })

      test('Check the TYPE of the properties', () => {
        const get_article_dto: GetArticleDTO = JSON.parse(JSON.stringify(dummy_get_article_dto))
        const article = ArticleMapper.fromGetDTO(get_article_dto)

        assert.isNumber(article.id)
        assert.isString(article.image)
        assert.isString(article.title)
        assert.isString(article.content)
        assert.isNumber(article.userId)
        assert.typeOf(article.createdAt, 'Date')
        assert.typeOf(article.updatedAt, 'Date')
        assert.isObject(article.user)
        assert.isNumber(article.user?.id)
        assert.isString(article.user?.email)
      })

      test('Check the VALUE of the properties', () => {
        const get_article_dto: GetArticleDTO = JSON.parse(JSON.stringify(dummy_get_article_dto))
        const article = ArticleMapper.fromGetDTO(get_article_dto)

        assert.strictEqual(article.id, get_article_dto.id)
        assert.strictEqual(article.image, get_article_dto.image)
        assert.strictEqual(article.title, get_article_dto.title)
        assert.strictEqual(article.content, get_article_dto.content)
        assert.strictEqual(article.userId, get_article_dto.user_id)
        assert.deepEqual(article.createdAt, new Date(get_article_dto.created_at))
        assert.deepEqual(article.updatedAt, new Date(get_article_dto.updated_at))
        assert.deepEqual(article.user, get_article_dto.user)
      })
    })
  })

  describe('ArticleMapper.toPostDTO()', () => {
    describe('Creates a PostArticleDTO from an Article', () => {
      test('Check the PRESENCE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const post_article_dto = ArticleMapper.toPostDTO(article)

        assert.isDefined(post_article_dto.image)
        assert.isDefined(post_article_dto.title)
        assert.isDefined(post_article_dto.content)
        assert.isDefined(post_article_dto.user_id)
      })

      test('Check the TYPE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const post_article_dto = ArticleMapper.toPostDTO(article)

        assert.isString(post_article_dto.image)
        assert.isString(post_article_dto.title)
        assert.isString(post_article_dto.content)
        assert.isNumber(post_article_dto.user_id)
      })

      test('Check the VALUE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const post_article_dto = ArticleMapper.toPostDTO(article)

        assert.strictEqual(post_article_dto.image, article.image)
        assert.strictEqual(post_article_dto.title, article.title)
        assert.strictEqual(post_article_dto.content, article.content)
        assert.strictEqual(post_article_dto.user_id, article.userId)
      })
    })
  })

  describe('ArticleMapper.toPutDTO()', () => {
    describe('Creates a PutArticleDTO from an Article', () => {
      test('Check the PRESENCE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const put_article_dto = ArticleMapper.toPutDTO(article)

        assert.isDefined(put_article_dto.id)
        assert.isDefined(put_article_dto.image)
        assert.isDefined(put_article_dto.title)
        assert.isDefined(put_article_dto.content)
        assert.isDefined(put_article_dto.user_id)
      })

      test('Check the TYPE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const put_article_dto = ArticleMapper.toPutDTO(article)

        assert.isNumber(put_article_dto.id)
        assert.isString(put_article_dto.image)
        assert.isString(put_article_dto.title)
        assert.isString(put_article_dto.content)
        assert.isNumber(put_article_dto.user_id)
      })

      test('Check the VALUE of the properties', () => {
        const article: Article = JSON.parse(JSON.stringify(dummy_article))
        const put_article_dto = ArticleMapper.toPutDTO(article)

        assert.strictEqual(put_article_dto.id, article.id)
        assert.strictEqual(put_article_dto.image, article.image)
        assert.strictEqual(put_article_dto.title, article.title)
        assert.strictEqual(put_article_dto.content, article.content)
        assert.strictEqual(put_article_dto.user_id, article.userId)
      })
    })
  })
})
