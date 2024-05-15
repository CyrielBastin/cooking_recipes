import { describe, test, assert } from 'vitest'
import GetIngredientDTO from '../../src/dto/GET/ingredient'
import Ingredient from '../../src/entity/ingredient'
import IngredientMapper from '../../src/entity/mappers/ingredient_mapper'

const dummy_get_ingredient_dto: GetIngredientDTO = {
  id: 1,
  name: 'Flour',
  image: null
}
const dummy_ingredient: Ingredient = {
  id: 2,
  name: 'Yeast',
  image: 'ingredients/yeast.png'
}

describe('Ingredient Mapper', () => {
  describe('IngredientMapper.fromGetDTO()', () => {
    describe('Creates an Ingredient from GetIngredientDTO', () => {
      test('All values for an Ingredient are present', () => {
        const get_ingredient_dto = JSON.parse(JSON.stringify(dummy_get_ingredient_dto))
        const ingredient = IngredientMapper.fromGetDTO(get_ingredient_dto)

        assert.exists(ingredient.id)
        assert.isDefined(ingredient.image)
        assert.isNull(ingredient.image)
        assert.exists(ingredient.name)
      })
      test('All values for an Ingredient are correct', () => {
        const get_ingredient_dto = JSON.parse(JSON.stringify(dummy_get_ingredient_dto))
        const ingredient = IngredientMapper.fromGetDTO(get_ingredient_dto)

        assert.strictEqual(ingredient.id, get_ingredient_dto.id)
        assert.strictEqual(ingredient.image, get_ingredient_dto.image)
        assert.strictEqual(ingredient.name, get_ingredient_dto.name)
      })
    })
  })

  describe('IngredientMapper.toPostDTO()', () => {
    describe('Creates a PostIngredientDTO from an Ingredient', () => {
      test('All values for a PostIngredientDTO are present', () => {
        const ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const post_ingredient_dto = IngredientMapper.toPostDTO(ingredient)

        assert.exists(post_ingredient_dto.image)
        assert.exists(post_ingredient_dto.name)

        ingredient.image = null
        const post_ingredient_dto_2 = IngredientMapper.toPostDTO(ingredient)

        assert.isDefined(post_ingredient_dto_2.image)
        assert.isNull(post_ingredient_dto_2.image)
        assert.exists(post_ingredient_dto_2.name)
      })
      test('All values for a PostIngredientDTO are correct', () => {
        const ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const post_ingredient_dto = IngredientMapper.toPostDTO(ingredient)

        assert.strictEqual(post_ingredient_dto.image, ingredient.image)
        assert.strictEqual(post_ingredient_dto.name, ingredient.name)

        ingredient.image = null
        const post_ingredient_dto_2 = IngredientMapper.toPostDTO(ingredient)

        assert.strictEqual(post_ingredient_dto_2.image, ingredient.image)
        assert.strictEqual(post_ingredient_dto_2.name, ingredient.name)
      })
    })
  })

  describe('IngredientMapper.toPutDTO()', () => {
    describe('Creates a PutIngredientDTO from an Ingredient', () => {
      test('All values for a PutIngredientDTO are present', () => {
        const ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const put_ingredient_dto = IngredientMapper.toPutDTO(ingredient)

        assert.exists(put_ingredient_dto.id)
        assert.exists(put_ingredient_dto.image)
        assert.exists(put_ingredient_dto.name)

        ingredient.image = null
        const put_ingredient_dto_2 = IngredientMapper.toPutDTO(ingredient)

        assert.exists(put_ingredient_dto_2.id)
        assert.isDefined(put_ingredient_dto_2.image)
        assert.isNull(put_ingredient_dto_2.image)
        assert.exists(put_ingredient_dto_2.name)
      })
      test('All values for a PutIngredientDTO are correct', () => {
        const ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const put_ingredient_dto = IngredientMapper.toPutDTO(ingredient)

        assert.strictEqual(put_ingredient_dto.id, ingredient.id)
        assert.strictEqual(put_ingredient_dto.image, ingredient.image)
        assert.strictEqual(put_ingredient_dto.name, ingredient.name)

        ingredient.image = null
        const put_ingredient_dto_2 = IngredientMapper.toPutDTO(ingredient)

        assert.strictEqual(put_ingredient_dto_2.id, ingredient.id)
        assert.strictEqual(put_ingredient_dto_2.image, ingredient.image)
        assert.strictEqual(put_ingredient_dto_2.name, ingredient.name)
      })
    })
  })
})
