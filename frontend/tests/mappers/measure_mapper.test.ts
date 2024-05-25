import { describe, test, assert } from 'vitest'
import GetMeasureDTO from '../../src/dto/GET/measure'
import Measure from '../../src/models/measure'
import MeasureMapper from '../../src/models/mappers/measure_mapper'

const dummy_get_measure_dto: GetMeasureDTO = {
  id: 1,
  name: 'Tablespoon'
}
const dummy_measure: Measure = {
  id: 2,
  name: 'Cup'
}

describe('Measure Mapper', () => {
  describe('MeasureMapper.fromGetDTO()', () => {
    describe('Creates a Measure from GetMeasureDTO', () => {
      test('Check the PRESENCE of all properties', () => {
        const get_measure_dto: GetMeasureDTO = JSON.parse(JSON.stringify(dummy_get_measure_dto))
        const measure = MeasureMapper.fromGetDTO(get_measure_dto)

        assert.isDefined(measure.id)
        assert.isDefined(measure.name)
      })

      test('Check the TYPE of all properties', () => {
        const get_measure_dto: GetMeasureDTO = JSON.parse(JSON.stringify(dummy_get_measure_dto))
        const measure = MeasureMapper.fromGetDTO(get_measure_dto)

        assert.isNumber(measure.id)
        assert.isString(measure.name)
      })

      test('Check the VALUE of all properties', () => {
        const get_measure_dto: GetMeasureDTO = JSON.parse(JSON.stringify(dummy_get_measure_dto))
        const measure = MeasureMapper.fromGetDTO(get_measure_dto)

        assert.strictEqual(measure.id, get_measure_dto.id)
        assert.strictEqual(measure.name, get_measure_dto.name)
      })
    })
  })

  describe('MeasureMapper.toPostDTO()', () => {
    describe('Creates a PostMeasureDTO from a Measure', () => {
      test('Check the PRESENCE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const post_measure_dto = MeasureMapper.toPostDTO(measure)

        assert.isDefined(post_measure_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const post_measure_dto = MeasureMapper.toPostDTO(measure)

        assert.isString(post_measure_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const post_measure_dto = MeasureMapper.toPostDTO(measure)

        assert.strictEqual(post_measure_dto.name, measure.name)
      })
    })
  })

  describe('MeasureMapper.toPutDTO()', () => {
    describe('Creates a PutMeasureDTO from a Measure', () => {
      test('Check the PRESENCE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const put_measure_dto = MeasureMapper.toPutDTO(measure)

        assert.isDefined(put_measure_dto.id)
        assert.isDefined(put_measure_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const put_measure_dto = MeasureMapper.toPutDTO(measure)

        assert.isNumber(put_measure_dto.id)
        assert.isString(put_measure_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const measure: Measure = JSON.parse(JSON.stringify(dummy_measure))
        const put_measure_dto = MeasureMapper.toPutDTO(measure)

        assert.strictEqual(put_measure_dto.id, measure.id)
        assert.strictEqual(put_measure_dto.name, measure.name)
      })
    })
  })
})
