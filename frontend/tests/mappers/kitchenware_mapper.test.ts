import { describe, test, assert } from 'vitest'
import GetKitchenwareDTO from '../../src/dto/GET/kitchenware'
import Kitchenware from '../../src/entity/kitchenware'
import KitchenwareMapper from '../../src/entity/mappers/kitchenware_mapper'

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
      test('All values for a Kitchenware are present', () => {
        const get_kitchenware_dto = JSON.parse(JSON.stringify(dummy_get_kitchenware_dto))
        const kitchenware = KitchenwareMapper.fromGetDTO(get_kitchenware_dto)

        assert.exists(kitchenware.id)
        assert.isDefined(kitchenware.image)
        assert.isNull(kitchenware.image)
        assert.exists(kitchenware.name)
      })
      test('All values for a Kitchenware are correct', () => {
        const get_kitchenware_dto = JSON.parse(JSON.stringify(dummy_get_kitchenware_dto))
        const kitchenware = KitchenwareMapper.fromGetDTO(get_kitchenware_dto)

        assert.strictEqual(kitchenware.id, get_kitchenware_dto.id)
        assert.strictEqual(kitchenware.image, get_kitchenware_dto.image)
        assert.strictEqual(kitchenware.name, get_kitchenware_dto.name)
      })
    })
  })

  describe('KitchenwareMapper.toPostDTO()', () => {
    describe('Creates a PostKitchenwareDTO from a Kitchenware', () => {
      test('All values for a PostKitchenwareDTO are present', () => {
        const kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const post_kitchenware_dto = KitchenwareMapper.toPostDTO(kitchenware)

        assert.exists(post_kitchenware_dto.image)
        assert.exists(post_kitchenware_dto.name)

        kitchenware.image = null
        const post_kitchenware_dto_2 = KitchenwareMapper.toPostDTO(kitchenware)

        assert.isDefined(post_kitchenware_dto_2.image)
        assert.isNull(post_kitchenware_dto_2.image)
        assert.exists(post_kitchenware_dto_2.name)
      })
      test('All values for a PostKitchenwareDTO are correct', () => {
        const kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const post_kitchenware_dto = KitchenwareMapper.toPostDTO(kitchenware)

        assert.strictEqual(post_kitchenware_dto.image, kitchenware.image)
        assert.strictEqual(post_kitchenware_dto.name, kitchenware.name)

        kitchenware.image = null
        const post_kitchenware_dto_2 = KitchenwareMapper.toPostDTO(kitchenware)

        assert.strictEqual(post_kitchenware_dto_2.image, kitchenware.image)
        assert.strictEqual(post_kitchenware_dto_2.name, kitchenware.name)
      })
    })
  })

  describe('KitchenwareMapper.toPutDTO()', () => {
    describe('Creates a PutKitchenwareDTO from a Kitchenware', () => {
      test('All values for a PutKitchenwareDTO are present', () => {
        const kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const put_kitchenware_dto = KitchenwareMapper.toPutDTO(kitchenware)

        assert.exists(put_kitchenware_dto.id)
        assert.exists(put_kitchenware_dto.image)
        assert.exists(put_kitchenware_dto.name)

        kitchenware.image = null
        const put_kitchenware_dto_2 = KitchenwareMapper.toPutDTO(kitchenware)

        assert.exists(put_kitchenware_dto_2.id)
        assert.isDefined(put_kitchenware_dto_2.image)
        assert.isNull(put_kitchenware_dto_2.image)
        assert.exists(put_kitchenware_dto_2.name)
      })
      test('All values for a PutKitchenwareDTO are correct', () => {
        const kitchenware = JSON.parse(JSON.stringify(dummy_kitchenware))
        const put_kitchenware_dto = KitchenwareMapper.toPutDTO(kitchenware)

        assert.strictEqual(put_kitchenware_dto.id, kitchenware.id)
        assert.strictEqual(put_kitchenware_dto.image, kitchenware.image)
        assert.strictEqual(put_kitchenware_dto.name, kitchenware.name)

        kitchenware.image = null
        const put_kitchenware_dto_2 = KitchenwareMapper.toPutDTO(kitchenware)

        assert.strictEqual(put_kitchenware_dto_2.id, kitchenware.id)
        assert.strictEqual(put_kitchenware_dto_2.image, kitchenware.image)
        assert.strictEqual(put_kitchenware_dto_2.name, kitchenware.name)
      })
    })
  })
})
