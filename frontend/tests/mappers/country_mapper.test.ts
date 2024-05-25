import { describe, test, assert } from 'vitest'
import GetCountryDTO from '../../src/dto/GET/country'
import Country from '../../src/models/country'
import CountryMapper from '../../src/models/mappers/country_mapper'

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
      test('Check the PRESENCE of all properties', () => {
        const get_country_dto: GetCountryDTO = JSON.parse(JSON.stringify(dummy_get_country_dto))
        const country = CountryMapper.fromGetDTO(get_country_dto)

        assert.isDefined(country.id)
        assert.isDefined(country.image)
        assert.isDefined(country.name)
      })

      test('Check the TYPE of all properties', () => {
        const get_country_dto: GetCountryDTO = JSON.parse(JSON.stringify(dummy_get_country_dto))
        const country = CountryMapper.fromGetDTO(get_country_dto)

        assert.isNumber(country.id)
        assert.isNull(country.image)
        assert.isString(country.name)
      })

      test('Check the VALUE of all properties', () => {
        const get_country_dto: GetCountryDTO = JSON.parse(JSON.stringify(dummy_get_country_dto))
        const country = CountryMapper.fromGetDTO(get_country_dto)

        assert.strictEqual(country.id, get_country_dto.id)
        assert.strictEqual(country.image, get_country_dto.image)
        assert.strictEqual(country.name, get_country_dto.name)
      })
    })
  })

  describe('CountryMapper.toPostDTO()', () => {
    describe('Creates a PostCountryDTO from a Country', () => {
      test('Check the PRESENCE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const post_country_dto = CountryMapper.toPostDTO(country)

        assert.isDefined(post_country_dto.image)
        assert.isDefined(post_country_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const post_country_dto = CountryMapper.toPostDTO(country)

        assert.isString(post_country_dto.image)
        assert.isString(post_country_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const post_country_dto = CountryMapper.toPostDTO(country)

        assert.strictEqual(post_country_dto.image, country.image)
        assert.strictEqual(post_country_dto.name, country.name)
      })
    })
  })

  describe('CountryMapper.toPutDTO()', () => {
    describe('Creates a PutCountryDTO from a Country', () => {
      test('Check the PRESENCE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const put_country_dto = CountryMapper.toPutDTO(country)

        assert.isDefined(put_country_dto.id)
        assert.isDefined(put_country_dto.image)
        assert.isDefined(put_country_dto.name)
      })

      test('Check the TYPE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const put_country_dto = CountryMapper.toPutDTO(country)

        assert.isNumber(put_country_dto.id)
        assert.isString(put_country_dto.image)
        assert.isString(put_country_dto.name)
      })

      test('Check the VALUE of all properties', () => {
        const country: Country = JSON.parse(JSON.stringify(dummy_country))
        const put_country_dto = CountryMapper.toPutDTO(country)

        assert.strictEqual(put_country_dto.id, country.id)
        assert.strictEqual(put_country_dto.image, country.image)
        assert.strictEqual(put_country_dto.name, country.name)
      })
    })
  })
})
