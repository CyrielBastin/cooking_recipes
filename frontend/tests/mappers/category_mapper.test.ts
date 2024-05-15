import { describe, test, assert } from 'vitest'
import GetCategoryDTO from '../../src/dto/GET/category'
import Category from '../../src/entity/category'
import CategoryMapper from '../../src/entity/mappers/category_mapper'

const dummy_get_category_dto: GetCategoryDTO = {
  id: 1,
  name: 'Main Course',
  parent_id: null
}
const dummy_category: Category = {
  id: 2,
  name: 'Lamb',
  parentId: 1
}

describe('Category Mapper', () => {
  describe('CategoryMapper.fromGetDTO()', () => {
    describe('Creates a Category from GetCategoryDTO', () => {
      test('Check the PRESENCE of the properties', () => {
        const get_category_dto = JSON.parse(JSON.stringify(dummy_get_category_dto))
        const category = CategoryMapper.fromGetDTO(get_category_dto)

        assert.isDefined(category.id)
        assert.isDefined(category.name)
        assert.isDefined(category.parentId)
      })

      test('Check the TYPE of the properties', () => {
        const get_category_dto = JSON.parse(JSON.stringify(dummy_get_category_dto))
        const category = CategoryMapper.fromGetDTO(get_category_dto)

        assert.isNumber(category.id)
        assert.isString(category.name)
        assert.isNull(category.parentId)
      })

      test('Check the VALUE of the properties', () => {
        const get_category_dto = JSON.parse(JSON.stringify(dummy_get_category_dto))
        const category = CategoryMapper.fromGetDTO(get_category_dto)

        assert.strictEqual(category.id, get_category_dto.id)
        assert.strictEqual(category.name, get_category_dto.name)
        assert.strictEqual(category.parentId, get_category_dto.parent_id)
      })
    })
  })

  describe('CategoryMapper.toPostDTO()', () => {
    describe('Creates a PostCategoryDTO from a Category', () => {
      test('Check the PRESENCE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const post_category_dto = CategoryMapper.toPostDTO(category)

        assert.isDefined(post_category_dto.name)
        assert.isDefined(post_category_dto.parent_id)
      })

      test('Check the TYPE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const post_category_dto = CategoryMapper.toPostDTO(category)

        assert.isString(post_category_dto.name)
        assert.isNumber(post_category_dto.parent_id)
      })

      test('Check the VALUE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const post_category_dto = CategoryMapper.toPostDTO(category)

        assert.strictEqual(post_category_dto.name, category.name)
        assert.strictEqual(post_category_dto.parent_id, category.parentId)
      })
    })
  })

  describe('CategoryMapper.toPutDTO()', () => {
    describe('Creates a PutCategoryDTO from a Category', () => {
      test('Check the PRESENCE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const put_category_dto = CategoryMapper.toPutDTO(category)

        assert.isDefined(put_category_dto.id)
        assert.isDefined(put_category_dto.name)
        assert.isDefined(put_category_dto.parent_id)
      })

      test('Check the TYPE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const put_category_dto = CategoryMapper.toPutDTO(category)

        assert.isNumber(put_category_dto.id)
        assert.isString(put_category_dto.name)
        assert.isNumber(put_category_dto.parent_id)
      })

      test('Check the VALUE of the properties', () => {
        const category = JSON.parse(JSON.stringify(dummy_category))
        const put_category_dto = CategoryMapper.toPutDTO(category)

        assert.strictEqual(put_category_dto.id, category.id)
        assert.strictEqual(put_category_dto.name, category.name)
        assert.strictEqual(put_category_dto.parent_id, category.parentId)
      })
    })
  })
})
