import type GetCountryDTO from '@/dto/GET/country'
import type Country from '../country'
import type PostCountryDTO from '@/dto/POST/country'
import type PutCountryDTO from '@/dto/PUT/country'

export default class CountryMapper {
  static fromGetDTO(country_dto: GetCountryDTO): Country {
    return {
      id: country_dto.id,
      name: country_dto.name,
      image: country_dto.image
    }
  }

  static toPostDTO(country: Country): PostCountryDTO {
    return {
      name: country.name,
      image: country.image
    }
  }

  static toPutDTO(country: Country): PutCountryDTO {
    return {
      id: country.id,
      name: country.name,
      image: country.image
    }
  }
}
