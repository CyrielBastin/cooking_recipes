import type GetCategoryDTO from '@/dto/GET/category'
import type Category from '../category'
import type PostCategoryDTO from '@/dto/POST/category'
import type PutCategoryDTO from '@/dto/PUT/category'

export default class CategoryMapper {
  static fromGetDTO(category_dto: GetCategoryDTO): Category {
    return {
      id: category_dto.id,
      name: category_dto.name,
      parentId: category_dto.parent_id,
      createdAt: category_dto.created_at,
      updatedAt: category_dto.updated_at,
      parent: {
        id: category_dto.parent?.id,
        name: category_dto.parent?.name
      }
    } as Category
  }

  static toPostDTO(category: Category): PostCategoryDTO {
    return {
      name: category.name,
      parent_id: category.parentId
    }
  }

  static toPutDTO(category: Category): PutCategoryDTO {
    return {
      id: category.id,
      name: category.name,
      parent_id: category.parentId
    }
  }
}
