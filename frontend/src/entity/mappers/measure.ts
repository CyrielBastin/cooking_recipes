import type GetMeasureDTO from '@/dto/GET/measure'
import type Measure from '../measure'
import type PostMeasureDTO from '@/dto/POST/measure'
import type PutMeasureDTO from '@/dto/PUT/measure'

export default class MeasureMapper {
  static fromGetDTO(measure_dto: GetMeasureDTO): Measure {
    return {
      id: measure_dto.id,
      name: measure_dto.name
    }
  }

  static toPostDTO(measure: Measure): PostMeasureDTO {
    return {
      name: measure.name
    }
  }

  static toPutDTO(measure: Measure): PutMeasureDTO {
    return {
      id: measure.id,
      name: measure.name
    }
  }
}
