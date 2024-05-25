import { describe, test, assert } from 'vitest'
import GetKitchenwareDTO from '../../src/dto/GET/kitchenware'
import Kitchenware from '../../src/models/kitchenware'
import KitchenwareMapper from '../../src/models/mappers/kitchenware_mapper'

const dummy_get_kitchenware_dto: GetKitchenwareDTO = {
  id: 1,
  name: 'Oven',
  image: null
}
const dummy_kitchenware: Kitchenware = {
  id: 2,
  name: 'Whisk',
  image: 'kitchenwares/whisk.png'
}

describe('Kitchenware Mapper', () => {
  describe('KitchenwareMapper.fromGetDTO()', () => {
    describe('Creates a Kitchenware from GetKitchenwareDTO', () => {
      test('Check the PRESENCE of all properties', () => {
        const get_kitchenware_dto: GetKitchenwareDTO = JSON.parse(
          JSON.stringify(dummy_get_kitchenware_dto)
        )
        const kitchenware = KitchenwareMapper.fromGetDTO(get_kitchenware_dto)

        assert.isDefined(kitchenware.id)
        assert.isDefined(kitchenware.image)
        assert.isDefined(kitchenware.name)
      })

      test('Check the TYPE of all properties', () => {
        const get_kitchenware_dto: GetKitchenwareDTO = JSON.parse(
          JSON.stringify(dummy_get_kitchenware_dto)
        )
        const kitchenware = KitchenwareMapper.fromGetDTO(get_kitchenware_dto)

        assert.isNumber(kitchenware.id)
        assert.isNull(kitchenware.image)
        assert.isString(kitchenware.name)
      })

      test('Check the VALUE of all properties', () => {
        const get_kitchenware_dto: GetKitchenwareDTO = JSON.parse(
          JSON.stringify(dummy_get_kitchenware_dto)
        )
        const kitchenware = KitchenwareMapper.fromGetDTO(get_kitchenware_dto)

        assert.strictEqual(kitchenware.id, get_kitchenware_dto.id)
        assert.strictEqual(kitchenware.image, get_kitchenware_dto.image)
        assert.strictEqual(kitchenware.name, get_kitchenware_dto.name)
      })
    })
  })

  describe('KitchenwareMapper.toPostDTO()', () => {
    describe('Creates a PostKitchenwareDTO from a Kitchenware', () => {
      test('Check the PRESENCE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const post_kitchenware_dto = KitchenwareMapper.toPostDTO(kitchenware)

        assert.isDefined(post_kitchenware_dto.image)
        assert.isDefined(post_kitchenware_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const post_kitchenware_dto = KitchenwareMapper.toPostDTO(kitchenware)

        assert.isString(post_kitchenware_dto.image)
        assert.isString(post_kitchenware_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const post_kitchenware_dto = KitchenwareMapper.toPostDTO(kitchenware)

        assert.strictEqual(post_kitchenware_dto.image, kitchenware.image)
        assert.strictEqual(post_kitchenware_dto.name, kitchenware.name)
      })
    })
  })

  describe('KitchenwareMapper.toPutDTO()', () => {
    describe('Creates a PutKitchenwareDTO from a Kitchenware', () => {
      test('Check the PRESENCE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const put_kitchenware_dto = KitchenwareMapper.toPutDTO(kitchenware)

        assert.isDefined(put_kitchenware_dto.id)
        assert.isDefined(put_kitchenware_dto.image)
        assert.isDefined(put_kitchenware_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const put_kitchenware_dto = KitchenwareMapper.toPutDTO(kitchenware)

        assert.isNumber(put_kitchenware_dto.id)
        assert.isString(put_kitchenware_dto.image)
        assert.isString(put_kitchenware_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const kitchenware: Kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const put_kitchenware_dto = KitchenwareMapper.toPutDTO(kitchenware)

        assert.strictEqual(put_kitchenware_dto.id, kitchenware.id)
        assert.strictEqual(put_kitchenware_dto.image, kitchenware.image)
        assert.strictEqual(put_kitchenware_dto.name, kitchenware.name)
      })
    })
  })
})
