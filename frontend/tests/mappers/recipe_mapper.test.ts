import { describe, test, assert } from 'vitest'
import GetRecipeDTO from '../../src/dto/GET/recipe'
import Recipe from '../../src/entity/recipe'
import RecipeMapper from '../../src/entity/mappers/recipe_mapper'

const dummy_get_recipe_dto: GetRecipeDTO = {
  id: 8,
  image: 'cuban_mojito.jpg',
  name: 'Mojito',
  category_id: 83,
  country_id: null,
  user_id: 1,
  preparation_time: 5,
  cooking_time: null,
  number_of_people: 3,
  difficulty: 'hard',
  price: 'medium',
  description: 'Moooooooojjiiiiiiiiiiito',
  created_at: '2024-04-30T14:38:37.430Z',
  updated_at: '2024-04-30T14:38:37.430Z',
  category: {
    id: 83,
    name: 'Mojitos'
  },
  user: {
    id: 1,
    email: 'valtyr@valtyr.io'
  }
}

const dummy_get_recipe_dto_full_info: GetRecipeDTO = {
  id: 15,
  image: 'caesar_salad.jpg',
  name: 'Caesar salad',
  category_id: 11,
  country_id: 9,
  user_id: 1,
  preparation_time: 15,
  cooking_time: null,
  number_of_people: 3,
  difficulty: 'normal',
  price: 'high',
  description: 'This cesar salad will bring you to the gates of Heaven',
  created_at: '2024-04-30T14:38:37.540Z',
  updated_at: '2024-04-30T14:38:37.540Z',
  category: {
    id: 11,
    name: 'Salads'
  },
  country: {
    id: 9,
    name: 'Mexico',
    image: 'mexico.png'
  },
  user: {
    id: 1,
    email: 'valtyr@valtyr.io'
  },
  kitchenwares: [
    {
      id: 2,
      name: 'Blender',
      image: 'blender.webp'
    },
    {
      id: 3,
      name: 'Bowl',
      image: 'bowl.webp'
    },
    {
      id: 13,
      name: 'Mixing bowl',
      image: 'mixing_bowl.webp'
    },
    {
      id: 16,
      name: 'Paint brush',
      image: 'paint_brush.webp'
    }
  ],
  ingredients: [
    {
      ingredients_recipe_id: 103,
      id: 94,
      image: 'parmesan.webp',
      name: 'Parmesan',
      quantity: 25,
      measure: 'g',
      comment: 'grated'
    },
    {
      ingredients_recipe_id: 104,
      id: 20,
      image: 'caper.webp',
      name: 'Caper',
      quantity: 2,
      measure: 'teaspoon',
      comment: null
    },
    {
      ingredients_recipe_id: 105,
      id: 87,
      image: 'mustard.webp',
      name: 'Mustard',
      quantity: 1,
      measure: 'teaspoon',
      comment: null
    },
    {
      ingredients_recipe_id: 106,
      id: 132,
      image: 'tabasco.webp',
      name: 'Tabasco',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      ingredients_recipe_id: 107,
      id: 75,
      image: 'lemon.webp',
      name: 'Lemon',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      ingredients_recipe_id: 108,
      id: 56,
      image: 'garlic.webp',
      name: 'Garlic',
      quantity: 1,
      measure: 'pod',
      comment: null
    },
    {
      ingredients_recipe_id: 109,
      id: 146,
      image: 'vegetable_oil.webp',
      name: 'Vegetable oil',
      quantity: 15,
      measure: 'cl',
      comment: null
    },
    {
      ingredients_recipe_id: 110,
      id: 101,
      image: 'pepper.webp',
      name: 'Pepper',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      ingredients_recipe_id: 111,
      id: 121,
      image: 'salt.webp',
      name: 'Salt',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      ingredients_recipe_id: 112,
      id: 51,
      image: 'egg.webp',
      name: 'Egg',
      quantity: 1,
      measure: 'unit',
      comment: null
    },
    {
      ingredients_recipe_id: 113,
      id: 94,
      image: 'parmesan.webp',
      name: 'Parmesan',
      quantity: 25,
      measure: 'g',
      comment: 'grated'
    },
    {
      ingredients_recipe_id: 114,
      id: 76,
      image: 'lettuce.webp',
      name: 'Lettuce',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      ingredients_recipe_id: 115,
      id: 16,
      image: 'bread.webp',
      name: 'Bread',
      quantity: 4,
      measure: 'slice',
      comment: null
    }
  ],
  instructions: [
    {
      id: 82,
      step: 1,
      comment: 'Dice the bread and color it in a pan with oil'
    },
    {
      id: 83,
      step: 2,
      comment: 'In a mixing bowl, tear off the salad and add breadcrumbs'
    },
    {
      id: 84,
      step: 3,
      comment: 'Prepare the sauce. Cook the egg in boiling water for 90 seconds'
    },
    {
      id: 85,
      step: 4,
      comment: 'Break the egg in the bowl. Blend everything and add to the salad'
    },
    {
      id: 86,
      step: 5,
      comment: 'Add the parmesan and serve'
    }
  ]
}

const dummy_recipe: Recipe = {
  id: 2,
  image: 'tartiflette.webp',
  name: 'Tartiflette',
  countryId: null,
  categoryId: 4,
  userId: 1,
  preparationTime: null,
  cookingTime: null,
  numberOfPeople: null,
  difficulty: 'hard',
  price: 'high',
  description: 'My favorite'
}

const dummy_recipe_with_infos: Recipe = {
  id: 3,
  image: 'recipes/lasagna.png',
  name: 'Lasagna',
  countryId: 2,
  categoryId: 10,
  userId: 1,
  preparationTime: 80,
  cookingTime: 25,
  numberOfPeople: null,
  difficulty: 'easy',
  price: 'low',
  description: 'Best Lasagna Ever',
  kitchenwareIds: [5, 6, 7, 10, 11, 12],
  ingredientsRecipesAttributes: [
    {
      id: 1,
      ingredientId: 1,
      quantity: 6,
      measureId: null,
      comment: 'Fresh Tomatoes'
    },
    {
      id: 2,
      ingredientId: 10,
      quantity: null,
      measureId: null,
      comment: null
    },
    {
      id: 3,
      ingredientId: 11,
      quantity: 5,
      measureId: 3,
      comment: '5 grams should suffice'
    }
  ],
  instructionsRecipesAttributes: [
    {
      id: 1,
      step: 1,
      comment: 'Prepare the bolo'
    },
    {
      id: 2,
      step: 2,
      comment: 'Prepare the rest'
    },
    {
      id: 3,
      step: 3,
      comment: 'Serve'
    }
  ]
}

describe('Recipe Mapper', () => {
  describe('RecipeMapper.fromGetDTO()', () => {
    describe('Creates a Recipe from GetRecipeDTO', () => {
      test('All values for a Recipe (base) are present', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.exists(recipe.id)
        assert.exists(recipe.image)
        assert.exists(recipe.name)
        assert.exists(recipe.categoryId)
        assert.isDefined(recipe.countryId)
        assert.isNull(recipe.countryId)
        assert.exists(recipe.userId)
        assert.exists(recipe.preparationTime)
        assert.isDefined(recipe.cookingTime)
        assert.isNull(recipe.cookingTime)
        assert.exists(recipe.numberOfPeople)
        assert.exists(recipe.difficulty)
        assert.exists(recipe.price)
        assert.exists(recipe.description)
        assert.exists(recipe.createdAt)
        assert.exists(recipe.updatedAt)
        assert.exists(recipe.category)
        assert.exists(recipe.user)
      })

      test('All values for a Recipe (extra infos) are present', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(
          JSON.stringify(dummy_get_recipe_dto_full_info)
        )
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.exists(recipe.id)
        assert.exists(recipe.image)
        assert.exists(recipe.name)
        assert.exists(recipe.categoryId)
        assert.exists(recipe.countryId)
        assert.exists(recipe.userId)
        assert.exists(recipe.preparationTime)
        assert.isDefined(recipe.cookingTime)
        assert.isNull(recipe.cookingTime)
        assert.exists(recipe.numberOfPeople)
        assert.exists(recipe.difficulty)
        assert.exists(recipe.price)
        assert.exists(recipe.description)
        assert.exists(recipe.createdAt)
        assert.exists(recipe.updatedAt)
        assert.exists(recipe.category)
        assert.exists(recipe.country)
        assert.exists(recipe.user)
        assert.exists(recipe.kitchenwares)
        assert.exists(recipe.ingredients)
        assert.exists(recipe.instructions)
      })

      test('All values for a Recipe are correct', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(
          JSON.stringify(dummy_get_recipe_dto_full_info)
        )
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.strictEqual(recipe.id, get_recipe_dto.id)
        assert.strictEqual(recipe.image, get_recipe_dto.image)
        assert.strictEqual(recipe.name, get_recipe_dto.name)
        assert.strictEqual(recipe.categoryId, get_recipe_dto.category_id)
        assert.strictEqual(recipe.countryId, get_recipe_dto.country_id)
        assert.strictEqual(recipe.userId, get_recipe_dto.user_id)
        assert.strictEqual(recipe.preparationTime, get_recipe_dto.preparation_time)
        assert.strictEqual(recipe.cookingTime, get_recipe_dto.cooking_time)
        assert.strictEqual(recipe.numberOfPeople, get_recipe_dto.number_of_people)
        assert.strictEqual(recipe.difficulty, get_recipe_dto.difficulty)
        assert.strictEqual(recipe.price, get_recipe_dto.price)
        assert.strictEqual(recipe.description, get_recipe_dto.description)
        assert.deepEqual(recipe.createdAt, new Date(get_recipe_dto.created_at))
        assert.deepEqual(recipe.updatedAt, new Date(get_recipe_dto.updated_at))
        assert.deepEqual(recipe.category, get_recipe_dto.category)
        assert.deepEqual(recipe.country, get_recipe_dto.country)
        assert.deepEqual(recipe.user, get_recipe_dto.user)
        assert.deepEqual(recipe.kitchenwares, get_recipe_dto.kitchenwares)
        assert.strictEqual(13, recipe.ingredients?.length)
        assert.strictEqual(
          recipe.ingredients?.at(0)?.ingredientRecipeId,
          get_recipe_dto.ingredients?.at(0)?.ingredients_recipe_id
        )
        assert.strictEqual(recipe.ingredients?.at(0)?.id, get_recipe_dto.ingredients?.at(0)?.id)
        assert.strictEqual(
          recipe.ingredients?.at(0)?.image,
          get_recipe_dto.ingredients?.at(0)?.image
        )
        assert.strictEqual(recipe.ingredients?.at(0)?.name, get_recipe_dto.ingredients?.at(0)?.name)
        assert.strictEqual(
          recipe.ingredients?.at(0)?.quantity,
          get_recipe_dto.ingredients?.at(0)?.quantity
        )
        assert.strictEqual(
          recipe.ingredients?.at(0)?.measure,
          get_recipe_dto.ingredients?.at(0)?.measure
        )
        assert.strictEqual(
          recipe.ingredients?.at(0)?.comment,
          get_recipe_dto.ingredients?.at(0)?.comment
        )
        assert.strictEqual(
          recipe.ingredients?.at(11)?.ingredientRecipeId,
          get_recipe_dto.ingredients?.at(11)?.ingredients_recipe_id
        )
        assert.strictEqual(recipe.ingredients?.at(11)?.id, get_recipe_dto.ingredients?.at(11)?.id)
        assert.strictEqual(
          recipe.ingredients?.at(11)?.image,
          get_recipe_dto.ingredients?.at(11)?.image
        )
        assert.strictEqual(
          recipe.ingredients?.at(11)?.name,
          get_recipe_dto.ingredients?.at(11)?.name
        )
        assert.strictEqual(
          recipe.ingredients?.at(11)?.quantity,
          get_recipe_dto.ingredients?.at(11)?.quantity
        )
        assert.strictEqual(
          recipe.ingredients?.at(11)?.measure,
          get_recipe_dto.ingredients?.at(11)?.measure
        )
        assert.strictEqual(
          recipe.ingredients?.at(11)?.comment,
          get_recipe_dto.ingredients?.at(11)?.comment
        )
      })
    })
  })

  describe('RecipeMapper.toPostDTO()', () => {
    describe('Creates a PostRecipeDTO from a Recipe', () => {
      test('All values for a PostRecipeDTO (base) are present', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.image)
        assert.exists(post_recipe_dto.name)
        assert.exists(post_recipe_dto.category_id)
        assert.isDefined(post_recipe_dto.country_id)
        assert.isNull(post_recipe_dto.country_id)
        assert.exists(post_recipe_dto.user_id)
        assert.isDefined(post_recipe_dto.preparation_time)
        assert.isNull(post_recipe_dto.preparation_time)
        assert.isDefined(post_recipe_dto.cooking_time)
        assert.isNull(post_recipe_dto.cooking_time)
        assert.isDefined(post_recipe_dto.number_of_people)
        assert.isNull(post_recipe_dto.number_of_people)
        assert.exists(post_recipe_dto.difficulty)
        assert.exists(post_recipe_dto.price)
        assert.exists(post_recipe_dto.description)
      })

      test('All values for a PostRecipeDTO (extra infos) are present', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe_with_infos))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.image)
        assert.exists(post_recipe_dto.name)
        assert.exists(post_recipe_dto.category_id)
        assert.exists(post_recipe_dto.country_id)
        assert.exists(post_recipe_dto.user_id)
        assert.exists(post_recipe_dto.preparation_time)
        assert.exists(post_recipe_dto.cooking_time)
        assert.isDefined(post_recipe_dto.number_of_people)
        assert.isNull(post_recipe_dto.number_of_people)
        assert.exists(post_recipe_dto.difficulty)
        assert.exists(post_recipe_dto.price)
        assert.exists(post_recipe_dto.description)
        assert.exists(post_recipe_dto.kitchenware_ids)
        assert.exists(post_recipe_dto.ingredients_recipes_attributes)
        assert.exists(post_recipe_dto.instructions_recipes_attributes)
      })

      // test('All values for a PostRecipeDTO are correct', () => {
      //   const recipe = JSON.parse(JSON.stringify(dummy_recipe_with_infos))
      //   const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

      //   assert.strictEqual(post_recipe_dto.image, recipe.image)
      // })
    })
  })

  // describe('RecipeMapper.toPutDTO()', () => {
  //   describe('Creates a PutRecipeDTO from a Recipe', () => {
  //     test('All values for a PutRecipeDTO are present', () => {
  //       const recipe = JSON.parse(JSON.stringify(dummy_recipe))
  //       const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

  //       assert.exists(put_recipe_dto.id)
  //       assert.exists(put_recipe_dto.image)
  //       assert.exists(put_recipe_dto.name)

  //       recipe.image = null
  //       const put_recipe_dto_2 = RecipeMapper.toPutDTO(recipe)

  //       assert.exists(put_recipe_dto_2.id)
  //       assert.isDefined(put_recipe_dto_2.image)
  //       assert.isNull(put_recipe_dto_2.image)
  //       assert.exists(put_recipe_dto_2.name)
  //     })
  //     test('All values for a PutRecipeDTO are correct', () => {
  //       const recipe = JSON.parse(JSON.stringify(dummy_recipe))
  //       const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

  //       assert.strictEqual(put_recipe_dto.id, recipe.id)
  //       assert.strictEqual(put_recipe_dto.image, recipe.image)
  //       assert.strictEqual(put_recipe_dto.name, recipe.name)

  //       recipe.image = null
  //       const put_recipe_dto_2 = RecipeMapper.toPutDTO(recipe)

  //       assert.strictEqual(put_recipe_dto_2.id, recipe.id)
  //       assert.strictEqual(put_recipe_dto_2.image, recipe.image)
  //       assert.strictEqual(put_recipe_dto_2.name, recipe.name)
  //     })
  //   })
  // })
})
