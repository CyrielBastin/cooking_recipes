import { describe, test, assert } from 'vitest'
import GetCountryDTO from '../../src/dto/GET/country'
import Country from '../../src/entity/country'
import CountryMapper from '../../src/entity/mappers/country_mapper'

const dummy_get_country_dto: GetCountryDTO = {
  id: 1,
  name: 'France',
  image: null
}
const dummy_country: Country = {
  id: 2,
  name: 'Italy',
  image: 'countries/italy.png'
}

describe('Country Mapper', () => {
  describe('CountryMapper.fromGetDTO()', () => {
    describe('Creates a Country from GetCountryDTO', () => {
      test('All values for a Country are present', () => {
        const get_country_dto = JSON.parse(JSON.stringify(dummy_get_country_dto))
        const country = CountryMapper.fromGetDTO(get_country_dto)

        assert.exists(country.id)
        assert.isDefined(country.image)
        assert.isNull(country.image)
        assert.exists(country.name)
      })
      test('All values for a Country are correct', () => {
        const get_country_dto = JSON.parse(JSON.stringify(dummy_get_country_dto))
        const country = CountryMapper.fromGetDTO(get_country_dto)

        assert.strictEqual(country.id, get_country_dto.id)
        assert.strictEqual(country.image, get_country_dto.image)
        assert.strictEqual(country.name, get_country_dto.name)
      })
    })
  })

  describe('CountryMapper.toPostDTO()', () => {
    describe('Creates a PostCountryDTO from a Country', () => {
      test('All values for a PostCountryDTO are present', () => {
        const country = JSON.parse(JSON.stringify(dummy_country))
        const post_country_dto = CountryMapper.toPostDTO(country)

        assert.exists(post_country_dto.image)
        assert.exists(post_country_dto.name)

        country.image = null
        const post_country_dto_2 = CountryMapper.toPostDTO(country)

        assert.isDefined(post_country_dto_2.image)
        assert.isNull(post_country_dto_2.image)
        assert.exists(post_country_dto_2.name)
      })
      test('All values for a PostCountryDTO are correct', () => {
        const country = JSON.parse(JSON.stringify(dummy_country))
        const post_country_dto = CountryMapper.toPostDTO(country)

        assert.strictEqual(post_country_dto.image, country.image)
        assert.strictEqual(post_country_dto.name, country.name)

        country.image = null
        const post_country_dto_2 = CountryMapper.toPostDTO(country)

        assert.strictEqual(post_country_dto_2.image, country.image)
        assert.strictEqual(post_country_dto_2.name, country.name)
      })
    })
  })

  describe('CountryMapper.toPutDTO()', () => {
    describe('Creates a PutCountryDTO from a Country', () => {
      test('All values for a PutCountryDTO are present', () => {
        const country = JSON.parse(JSON.stringify(dummy_country))
        const put_country_dto = CountryMapper.toPutDTO(country)

        assert.exists(put_country_dto.id)
        assert.exists(put_country_dto.image)
        assert.exists(put_country_dto.name)

        country.image = null
        const put_country_dto_2 = CountryMapper.toPutDTO(country)

        assert.exists(put_country_dto_2.id)
        assert.isDefined(put_country_dto_2.image)
        assert.isNull(put_country_dto_2.image)
        assert.exists(put_country_dto_2.name)
      })
      test('All values for a PutCountryDTO are correct', () => {
        const country = JSON.parse(JSON.stringify(dummy_country))
        const put_country_dto = CountryMapper.toPutDTO(country)

        assert.strictEqual(put_country_dto.id, country.id)
        assert.strictEqual(put_country_dto.image, country.image)
        assert.strictEqual(put_country_dto.name, country.name)

        country.image = null
        const put_country_dto_2 = CountryMapper.toPutDTO(country)

        assert.strictEqual(put_country_dto_2.id, country.id)
        assert.strictEqual(put_country_dto_2.image, country.image)
        assert.strictEqual(put_country_dto_2.name, country.name)
      })
    })
  })
})
