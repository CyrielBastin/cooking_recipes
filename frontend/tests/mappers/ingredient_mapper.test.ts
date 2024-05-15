import { describe, test, assert } from 'vitest'
import GetIngredientDTO from '../../src/dto/GET/ingredient'
import Ingredient from '../../src/entity/ingredient'
import IngredientMapper from '../../src/entity/mappers/ingredient_mapper'

const dummy_get_ingredient_dto: GetIngredientDTO = {
  id: 1,
  name: 'Flour',
  image: 'ingredients/yeast.png'
}
const dummy_ingredient: Ingredient = {
  id: 2,
  name: 'Yeast',
  image: null
}

describe('Ingredient Mapper', () => {
  describe('IngredientMapper.fromGetDTO()', () => {
    describe('Creates an Ingredient from GetIngredientDTO', () => {
      test('Check the VALUE of all properties', () => {
        const get_ingredient_dto: GetIngredientDTO = JSON.parse(
          JSON.stringify(dummy_get_ingredient_dto)
        )
        const ingredient = IngredientMapper.fromGetDTO(get_ingredient_dto)

        assert.isDefined(ingredient.id)
        assert.isDefined(ingredient.image)
        assert.isDefined(ingredient.name)
      })

      test('Check the TYPE of all properties', () => {
        const get_ingredient_dto: GetIngredientDTO = JSON.parse(
          JSON.stringify(dummy_get_ingredient_dto)
        )
        const ingredient = IngredientMapper.fromGetDTO(get_ingredient_dto)

        assert.isNumber(ingredient.id)
        assert.isString(ingredient.image)
        assert.isString(ingredient.name)
      })

      test('Check the VALUE of all properties', () => {
        const get_ingredient_dto: GetIngredientDTO = JSON.parse(
          JSON.stringify(dummy_get_ingredient_dto)
        )
        const ingredient = IngredientMapper.fromGetDTO(get_ingredient_dto)

        assert.strictEqual(ingredient.id, get_ingredient_dto.id)
        assert.strictEqual(ingredient.image, get_ingredient_dto.image)
        assert.strictEqual(ingredient.name, get_ingredient_dto.name)
      })
    })
  })

  describe('IngredientMapper.toPostDTO()', () => {
    describe('Creates a PostIngredientDTO from an Ingredient', () => {
      test('Check the PRESENCE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const post_ingredient_dto = IngredientMapper.toPostDTO(ingredient)

        assert.isDefined(post_ingredient_dto.image)
        assert.isDefined(post_ingredient_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const post_ingredient_dto = IngredientMapper.toPostDTO(ingredient)

        assert.isNull(post_ingredient_dto.image)
        assert.isString(post_ingredient_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const post_ingredient_dto = IngredientMapper.toPostDTO(ingredient)

        assert.strictEqual(post_ingredient_dto.image, ingredient.image)
        assert.strictEqual(post_ingredient_dto.name, ingredient.name)
      })
    })
  })

  describe('IngredientMapper.toPutDTO()', () => {
    describe('Creates a PutIngredientDTO from an Ingredient', () => {
      test('Check the PRESENCE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const put_ingredient_dto = IngredientMapper.toPutDTO(ingredient)

        assert.isDefined(put_ingredient_dto.id)
        assert.isDefined(put_ingredient_dto.image)
        assert.isDefined(put_ingredient_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const put_ingredient_dto = IngredientMapper.toPutDTO(ingredient)

        assert.isNumber(put_ingredient_dto.id)
        assert.isNull(put_ingredient_dto.image)
        assert.isString(put_ingredient_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const ingredient: Ingredient = JSON.parse(JSON.stringify(dummy_ingredient))
        const put_ingredient_dto = IngredientMapper.toPutDTO(ingredient)

        assert.strictEqual(put_ingredient_dto.id, ingredient.id)
        assert.strictEqual(put_ingredient_dto.image, ingredient.image)
        assert.strictEqual(put_ingredient_dto.name, ingredient.name)
      })
    })
  })
})
