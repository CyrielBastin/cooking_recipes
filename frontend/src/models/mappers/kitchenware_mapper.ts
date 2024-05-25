import type GetKitchenwareDTO from '@/dto/GET/kitchenware'
import type Kitchenware from '../kitchenware'
import type PostKitchenwareDTO from '@/dto/POST/kitchenware'
import type PutKitchenwareDTO from '@/dto/PUT/kitchenware'

export default class KitchenwareMapper {
  static fromGetDTO(kitchenware_dto: GetKitchenwareDTO): Kitchenware {
    return {
      id: kitchenware_dto.id,
      name: kitchenware_dto.name,
      image: kitchenware_dto.image
    }
  }

  static toPostDTO(kitchenware: Kitchenware): PostKitchenwareDTO {
    return {
      name: kitchenware.name,
      image: kitchenware.image
    }
  }

  static toPutDTO(kitchenware: Kitchenware): PutKitchenwareDTO {
    return {
      id: kitchenware.id,
      name: kitchenware.name,
      image: kitchenware.image
    }
  }
}
