import { describe, test, assert } from 'vitest'
import GetMeasureDTO from '../../src/dto/GET/measure'
import Measure from '../../src/entity/measure'
import MeasureMapper from '../../src/entity/mappers/measure_mapper'

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
      test('All values for a Measure are present', () => {
        const get_measure_dto = JSON.parse(JSON.stringify(dummy_get_measure_dto))
        const measure = MeasureMapper.fromGetDTO(get_measure_dto)

        assert.exists(measure.id)
        assert.exists(measure.name)
      })
      test('All values for a Measure are correct', () => {
        const get_measure_dto = JSON.parse(JSON.stringify(dummy_get_measure_dto))
        const measure = MeasureMapper.fromGetDTO(get_measure_dto)

        assert.strictEqual(measure.id, get_measure_dto.id)
        assert.strictEqual(measure.name, get_measure_dto.name)
      })
    })
  })

  describe('MeasureMapper.toPostDTO()', () => {
    describe('Creates a PostMeasureDTO from a Measure', () => {
      test('All values for a PostMeasureDTO are present', () => {
        const measure = JSON.parse(JSON.stringify(dummy_measure))
        const post_measure_dto = MeasureMapper.toPostDTO(measure)

        assert.exists(post_measure_dto.name)
      })
      test('All values for a PostMeasureDTO are correct', () => {
        const measure = JSON.parse(JSON.stringify(dummy_measure))
        const post_measure_dto = MeasureMapper.toPostDTO(measure)

        assert.strictEqual(post_measure_dto.name, measure.name)
      })
    })
  })

  describe('MeasureMapper.toPutDTO()', () => {
    describe('Creates a PutMeasureDTO from a Measure', () => {
      test('All values for a PutMeasureDTO are present', () => {
        const measure = JSON.parse(JSON.stringify(dummy_measure))
        const put_measure_dto = MeasureMapper.toPutDTO(measure)

        assert.exists(put_measure_dto.id)
        assert.exists(put_measure_dto.name)
      })
      test('All values for a PutMeasureDTO are correct', () => {
        const measure = JSON.parse(JSON.stringify(dummy_measure))
        const put_measure_dto = MeasureMapper.toPutDTO(measure)

        assert.strictEqual(put_measure_dto.id, measure.id)
        assert.strictEqual(put_measure_dto.name, measure.name)
      })
    })
  })
})
