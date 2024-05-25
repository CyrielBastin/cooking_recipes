import { describe, test, assert } from 'vitest'
import GetRecipeDTO from '../../src/dto/GET/recipe'
import Recipe from '../../src/models/recipe'
import RecipeMapper from '../../src/models/mappers/recipe_mapper'

const dummy_get_recipe_dto: GetRecipeDTO = {
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
      id: 103,
      ingredient_id: 94,
      image: 'parmesan.webp',
      name: 'Parmesan',
      quantity: 25,
      measure: 'g',
      comment: 'grated'
    },
    {
      id: 104,
      ingredient_id: 20,
      image: 'caper.webp',
      name: 'Caper',
      quantity: 2,
      measure: 'teaspoon',
      comment: null
    },
    {
      id: 107,
      ingredient_id: 75,
      image: 'lemon.webp',
      name: 'Lemon',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      id: 108,
      ingredient_id: 56,
      image: 'garlic.webp',
      name: 'Garlic',
      quantity: 1,
      measure: 'pod',
      comment: null
    },
    {
      id: 109,
      ingredient_id: 146,
      image: 'vegetable_oil.webp',
      name: 'Vegetable oil',
      quantity: 15,
      measure: 'cl',
      comment: null
    },
    {
      id: 112,
      ingredient_id: 51,
      image: 'egg.webp',
      name: 'Egg',
      quantity: 1,
      measure: 'unit',
      comment: null
    },
    {
      id: 113,
      ingredient_id: 94,
      image: 'parmesan.webp',
      name: 'Parmesan',
      quantity: 25,
      measure: 'g',
      comment: 'grated'
    },
    {
      id: 114,
      ingredient_id: 76,
      image: 'lettuce.webp',
      name: 'Lettuce',
      quantity: null,
      measure: null,
      comment: null
    },
    {
      id: 115,
      ingredient_id: 16,
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
      test('Check the PRESENCE of all properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.isDefined(recipe.id)
        assert.isDefined(recipe.image)
        assert.isDefined(recipe.name)
        assert.isDefined(recipe.categoryId)
        assert.isDefined(recipe.countryId)
        assert.isDefined(recipe.userId)
        assert.isDefined(recipe.preparationTime)
        assert.isDefined(recipe.cookingTime)
        assert.isDefined(recipe.numberOfPeople)
        assert.isDefined(recipe.difficulty)
        assert.isDefined(recipe.price)
        assert.isDefined(recipe.description)
        assert.isDefined(recipe.createdAt)
        assert.isDefined(recipe.updatedAt)
        assert.isDefined(recipe.category)
        assert.isDefined(recipe.country)
        assert.isDefined(recipe.user)
        assert.isDefined(recipe.kitchenwares)
        assert.isDefined(recipe.ingredients)
        assert.isDefined(recipe.instructions)
      })

      test('Check the PRESENCE of property `kitchenwares` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.exists(recipe.kitchenwares)
        assert.property(recipe.kitchenwares?.at(0), 'id')
        assert.property(recipe.kitchenwares?.at(0), 'image')
        assert.property(recipe.kitchenwares?.at(0), 'name')
      })

      test('Check the PRESENCE of property `ingredients` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.exists(recipe.ingredients)
        assert.property(recipe.ingredients?.at(0), 'id')
        assert.property(recipe.ingredients?.at(0), 'ingredientId')
        assert.property(recipe.ingredients?.at(0), 'image')
        assert.property(recipe.ingredients?.at(0), 'name')
        assert.property(recipe.ingredients?.at(0), 'quantity')
        assert.property(recipe.ingredients?.at(0), 'measure')
        assert.property(recipe.ingredients?.at(0), 'comment')
      })

      test('Check the PRESENCE of property `instructions` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.exists(recipe.instructions)
        assert.property(recipe.instructions?.at(0), 'id')
        assert.property(recipe.instructions?.at(0), 'step')
        assert.property(recipe.instructions?.at(0), 'comment')
      })

      test('Check the TYPE of all properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.isNumber(recipe.id)
        assert.isString(recipe.image)
        assert.isString(recipe.name)
        assert.isNumber(recipe.categoryId)
        assert.isNumber(recipe.countryId)
        assert.isNumber(recipe.userId)
        assert.isNumber(recipe.preparationTime)
        assert.isNull(recipe.cookingTime)
        assert.isNumber(recipe.numberOfPeople)
        assert.isString(recipe.difficulty)
        assert.isString(recipe.price)
        assert.isString(recipe.description)
        assert.typeOf(recipe.createdAt, 'Date')
        assert.typeOf(recipe.updatedAt, 'Date')
        assert.isObject(recipe.category)
        assert.isObject(recipe.country)
        assert.isObject(recipe.user)
        assert.isArray(recipe.kitchenwares)
        assert.isArray(recipe.ingredients)
        assert.isArray(recipe.instructions)
      })

      test('Check the TYPE of property `kitchenwares` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.isArray(recipe.kitchenwares)
        assert.isNumber(recipe.kitchenwares?.at(0)?.id)
        assert.isString(recipe.kitchenwares?.at(0)?.image)
        assert.isString(recipe.kitchenwares?.at(0)?.name)
      })

      test('Check the TYPE of property `ingredients` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.isArray(recipe.ingredients)
        assert.isNumber(recipe.ingredients?.at(2)?.id)
        assert.isNumber(recipe.ingredients?.at(2)?.ingredientId)
        assert.isString(recipe.ingredients?.at(2)?.image)
        assert.isString(recipe.ingredients?.at(2)?.name)
        assert.isNull(recipe.ingredients?.at(2)?.quantity)
        assert.isNull(recipe.ingredients?.at(2)?.measure)
        assert.isNull(recipe.ingredients?.at(2)?.comment)
      })

      test('Check the TYPE of property `instructions` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.isArray(recipe.instructions)
        assert.isNumber(recipe.instructions?.at(0)?.id)
        assert.isNumber(recipe.instructions?.at(0)?.step)
        assert.isString(recipe.instructions?.at(0)?.comment)
      })

      test('Check the VALUE of all properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
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
      })

      test('Check the VALUE of property `kitchenwares` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.strictEqual(recipe.kitchenwares?.length, 4)
        assert.strictEqual(recipe.kitchenwares?.at(0)?.id, get_recipe_dto.kitchenwares?.at(0)?.id)
        assert.strictEqual(
          recipe.kitchenwares?.at(0)?.image,
          get_recipe_dto.kitchenwares?.at(0)?.image
        )
        assert.strictEqual(
          recipe.kitchenwares?.at(0)?.name,
          get_recipe_dto.kitchenwares?.at(0)?.name
        )
        assert.strictEqual(recipe.kitchenwares?.at(3)?.id, get_recipe_dto.kitchenwares?.at(3)?.id)
        assert.strictEqual(
          recipe.kitchenwares?.at(3)?.image,
          get_recipe_dto.kitchenwares?.at(3)?.image
        )
        assert.strictEqual(
          recipe.kitchenwares?.at(3)?.name,
          get_recipe_dto.kitchenwares?.at(3)?.name
        )
      })

      test('Check the VALUE of property `ingredients` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.strictEqual(recipe.ingredients?.length, 9)
        assert.strictEqual(recipe.ingredients?.at(0)?.id, get_recipe_dto.ingredients?.at(0)?.id)
        assert.strictEqual(
          recipe.ingredients?.at(0)?.ingredientId,
          get_recipe_dto.ingredients?.at(0)?.ingredient_id
        )
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
        assert.strictEqual(recipe.ingredients?.at(7)?.id, get_recipe_dto.ingredients?.at(7)?.id)
        assert.strictEqual(
          recipe.ingredients?.at(7)?.ingredientId,
          get_recipe_dto.ingredients?.at(7)?.ingredient_id
        )
        assert.strictEqual(
          recipe.ingredients?.at(7)?.image,
          get_recipe_dto.ingredients?.at(7)?.image
        )
        assert.strictEqual(recipe.ingredients?.at(7)?.name, get_recipe_dto.ingredients?.at(7)?.name)
        assert.strictEqual(
          recipe.ingredients?.at(7)?.quantity,
          get_recipe_dto.ingredients?.at(7)?.quantity
        )
        assert.strictEqual(
          recipe.ingredients?.at(7)?.measure,
          get_recipe_dto.ingredients?.at(7)?.measure
        )
        assert.strictEqual(
          recipe.ingredients?.at(7)?.comment,
          get_recipe_dto.ingredients?.at(7)?.comment
        )
      })

      test('Check the VALUE of property `instructions` nested properties', () => {
        const get_recipe_dto: GetRecipeDTO = JSON.parse(JSON.stringify(dummy_get_recipe_dto))
        const recipe = RecipeMapper.fromGetDTO(get_recipe_dto)

        assert.strictEqual(recipe.instructions?.length, 5)
        assert.strictEqual(recipe.instructions?.at(0)?.id, get_recipe_dto.instructions?.at(0)?.id)
        assert.strictEqual(
          recipe.instructions?.at(0)?.step,
          get_recipe_dto.instructions?.at(0)?.step
        )
        assert.strictEqual(
          recipe.instructions?.at(0)?.comment,
          get_recipe_dto.instructions?.at(0)?.comment
        )
        assert.strictEqual(recipe.instructions?.at(4)?.id, get_recipe_dto.instructions?.at(4)?.id)
        assert.strictEqual(
          recipe.instructions?.at(4)?.step,
          get_recipe_dto.instructions?.at(4)?.step
        )
        assert.strictEqual(
          recipe.instructions?.at(4)?.comment,
          get_recipe_dto.instructions?.at(4)?.comment
        )
      })
    })
  })

  describe('RecipeMapper.toPostDTO()', () => {
    describe('Creates a PostRecipeDTO from a Recipe', () => {
      test('Check the PRESENCE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.isDefined(post_recipe_dto.image)
        assert.isDefined(post_recipe_dto.name)
        assert.isDefined(post_recipe_dto.category_id)
        assert.isDefined(post_recipe_dto.country_id)
        assert.isDefined(post_recipe_dto.user_id)
        assert.isDefined(post_recipe_dto.preparation_time)
        assert.isDefined(post_recipe_dto.cooking_time)
        assert.isDefined(post_recipe_dto.number_of_people)
        assert.isDefined(post_recipe_dto.difficulty)
        assert.isDefined(post_recipe_dto.price)
        assert.isDefined(post_recipe_dto.description)
        assert.isDefined(post_recipe_dto.kitchenware_ids)
        assert.isDefined(post_recipe_dto.ingredients_recipes_attributes)
        assert.isDefined(post_recipe_dto.instructions_recipes_attributes)
      })

      test('Check the PRESENCE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.ingredients_recipes_attributes)
        assert.property(post_recipe_dto.ingredients_recipes_attributes?.at(0), 'ingredient_id')
        assert.property(post_recipe_dto.ingredients_recipes_attributes?.at(0), 'quantity')
        assert.property(post_recipe_dto.ingredients_recipes_attributes?.at(0), 'measure_id')
        assert.property(post_recipe_dto.ingredients_recipes_attributes?.at(0), 'comment')
      })

      test('Check the PRESENCE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.instructions_recipes_attributes)
        assert.property(post_recipe_dto.instructions_recipes_attributes?.at(0), 'step')
        assert.property(post_recipe_dto.instructions_recipes_attributes?.at(0), 'comment')
      })

      test('Check the TYPE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.isString(post_recipe_dto.image)
        assert.isString(post_recipe_dto.name)
        assert.isNumber(post_recipe_dto.category_id)
        assert.isNumber(post_recipe_dto.country_id)
        assert.isNumber(post_recipe_dto.user_id)
        assert.isNumber(post_recipe_dto.preparation_time)
        assert.isNumber(post_recipe_dto.cooking_time)
        assert.isNull(post_recipe_dto.number_of_people)
        assert.isString(post_recipe_dto.difficulty)
        assert.isString(post_recipe_dto.price)
        assert.isString(post_recipe_dto.description)
        assert.isArray(post_recipe_dto.kitchenware_ids)
        assert.isArray(post_recipe_dto.ingredients_recipes_attributes)
        assert.isArray(post_recipe_dto.instructions_recipes_attributes)
      })

      test('Check the TYPE of property `kitchenware_ids` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.kitchenware_ids)
        assert.isArray(post_recipe_dto.kitchenware_ids)
        assert.isNumber(post_recipe_dto.kitchenware_ids?.at(0))
      })

      test('Check the TYPE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.isArray(post_recipe_dto.ingredients_recipes_attributes)
        assert.isNumber(post_recipe_dto.ingredients_recipes_attributes?.at(0)?.ingredient_id)
        assert.isNumber(post_recipe_dto.ingredients_recipes_attributes?.at(0)?.quantity)
        assert.isNull(post_recipe_dto.ingredients_recipes_attributes?.at(0)?.measure_id)
        assert.isString(post_recipe_dto.ingredients_recipes_attributes?.at(0)?.comment)
      })

      test('Check the TYPE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.isArray(post_recipe_dto.instructions_recipes_attributes)
        assert.isNumber(post_recipe_dto.instructions_recipes_attributes?.at(0)?.step)
        assert.isString(post_recipe_dto.instructions_recipes_attributes?.at(0)?.comment)
      })

      test('Check the VALUE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.strictEqual(post_recipe_dto.image, recipe.image)
        assert.strictEqual(post_recipe_dto.name, recipe.name)
        assert.strictEqual(post_recipe_dto.category_id, recipe.categoryId)
        assert.strictEqual(post_recipe_dto.country_id, recipe.countryId)
        assert.strictEqual(post_recipe_dto.user_id, recipe.userId)
        assert.strictEqual(post_recipe_dto.preparation_time, recipe.preparationTime)
        assert.strictEqual(post_recipe_dto.cooking_time, recipe.cookingTime)
        assert.strictEqual(post_recipe_dto.number_of_people, recipe.numberOfPeople)
        assert.strictEqual(post_recipe_dto.difficulty, recipe.difficulty)
        assert.strictEqual(post_recipe_dto.price, recipe.price)
        assert.strictEqual(post_recipe_dto.description, recipe.description)
      })

      test('Check the VALUE of property `kitchenware_ids` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.kitchenware_ids)
        assert.isArray(post_recipe_dto.kitchenware_ids)
        assert.deepEqual(post_recipe_dto.kitchenware_ids, recipe.kitchenwareIds)
      })

      test('Check the VALUE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.ingredients_recipes_attributes)
        assert.strictEqual(post_recipe_dto.ingredients_recipes_attributes?.length, 3)
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(0)?.ingredient_id,
          recipe.ingredientsRecipesAttributes?.at(0)?.ingredientId
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(0)?.quantity,
          recipe.ingredientsRecipesAttributes?.at(0)?.quantity
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(0)?.measure_id,
          recipe.ingredientsRecipesAttributes?.at(0)?.measureId
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(0)?.comment,
          recipe.ingredientsRecipesAttributes?.at(0)?.comment
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(2)?.ingredient_id,
          recipe.ingredientsRecipesAttributes?.at(2)?.ingredientId
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(2)?.quantity,
          recipe.ingredientsRecipesAttributes?.at(2)?.quantity
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(2)?.measure_id,
          recipe.ingredientsRecipesAttributes?.at(2)?.measureId
        )
        assert.strictEqual(
          post_recipe_dto.ingredients_recipes_attributes?.at(2)?.comment,
          recipe.ingredientsRecipesAttributes?.at(2)?.comment
        )
      })

      test('Check the VALUE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const post_recipe_dto = RecipeMapper.toPostDTO(recipe)

        assert.exists(post_recipe_dto.instructions_recipes_attributes)
        assert.strictEqual(post_recipe_dto.ingredients_recipes_attributes?.length, 3)
        assert.strictEqual(
          post_recipe_dto.instructions_recipes_attributes?.at(0)?.step,
          recipe.instructionsRecipesAttributes?.at(0)?.step
        )
        assert.strictEqual(
          post_recipe_dto.instructions_recipes_attributes?.at(0)?.comment,
          recipe.instructionsRecipesAttributes?.at(0)?.comment
        )
        assert.strictEqual(
          post_recipe_dto.instructions_recipes_attributes?.at(2)?.step,
          recipe.instructionsRecipesAttributes?.at(2)?.step
        )
        assert.strictEqual(
          post_recipe_dto.instructions_recipes_attributes?.at(2)?.comment,
          recipe.instructionsRecipesAttributes?.at(2)?.comment
        )
      })
    })
  })

  describe('RecipeMapper.toPutDTO()', () => {
    describe('Creates a PutRecipeDTO from a Recipe', () => {
      test('Check the PRESENCE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.isDefined(put_recipe_dto.id)
        assert.isDefined(put_recipe_dto.image)
        assert.isDefined(put_recipe_dto.name)
        assert.isDefined(put_recipe_dto.category_id)
        assert.isDefined(put_recipe_dto.country_id)
        assert.isDefined(put_recipe_dto.user_id)
        assert.isDefined(put_recipe_dto.preparation_time)
        assert.isDefined(put_recipe_dto.cooking_time)
        assert.isDefined(put_recipe_dto.number_of_people)
        assert.isDefined(put_recipe_dto.difficulty)
        assert.isDefined(put_recipe_dto.price)
        assert.isDefined(put_recipe_dto.description)
        assert.isDefined(put_recipe_dto.kitchenware_ids)
        assert.isDefined(put_recipe_dto.ingredients_recipes_attributes)
        assert.isDefined(put_recipe_dto.instructions_recipes_attributes)
      })

      test('Check the PRESENCE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.ingredients_recipes_attributes)
        assert.property(put_recipe_dto.ingredients_recipes_attributes?.at(0), 'id')
        assert.property(put_recipe_dto.ingredients_recipes_attributes?.at(0), 'ingredient_id')
        assert.property(put_recipe_dto.ingredients_recipes_attributes?.at(0), 'quantity')
        assert.property(put_recipe_dto.ingredients_recipes_attributes?.at(0), 'measure_id')
        assert.property(put_recipe_dto.ingredients_recipes_attributes?.at(0), 'comment')
      })

      test('Check the PRESENCE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.instructions_recipes_attributes)
        assert.property(put_recipe_dto.instructions_recipes_attributes?.at(0), 'id')
        assert.property(put_recipe_dto.instructions_recipes_attributes?.at(0), 'step')
        assert.property(put_recipe_dto.instructions_recipes_attributes?.at(0), 'comment')
      })

      test('Check the TYPE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.isNumber(put_recipe_dto.id)
        assert.isString(put_recipe_dto.image)
        assert.isString(put_recipe_dto.name)
        assert.isNumber(put_recipe_dto.category_id)
        assert.isNumber(put_recipe_dto.country_id)
        assert.isNumber(put_recipe_dto.user_id)
        assert.isNumber(put_recipe_dto.preparation_time)
        assert.isNumber(put_recipe_dto.cooking_time)
        assert.isNull(put_recipe_dto.number_of_people)
        assert.isString(put_recipe_dto.difficulty)
        assert.isString(put_recipe_dto.price)
        assert.isString(put_recipe_dto.description)
        assert.isArray(put_recipe_dto.kitchenware_ids)
        assert.isArray(put_recipe_dto.ingredients_recipes_attributes)
        assert.isArray(put_recipe_dto.instructions_recipes_attributes)
      })

      test('Check the TYPE of property `kitchenware_ids` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.kitchenware_ids)
        assert.isArray(put_recipe_dto.kitchenware_ids)
        assert.isNumber(put_recipe_dto.kitchenware_ids?.at(0))
      })

      test('Check the TYPE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.ingredients_recipes_attributes)
        assert.isArray(put_recipe_dto.ingredients_recipes_attributes)
        assert.isNumber(put_recipe_dto.ingredients_recipes_attributes?.at(0)?.id)
        assert.isNumber(put_recipe_dto.ingredients_recipes_attributes?.at(0)?.ingredient_id)
        assert.isNumber(put_recipe_dto.ingredients_recipes_attributes?.at(0)?.quantity)
        assert.isNull(put_recipe_dto.ingredients_recipes_attributes?.at(0)?.measure_id)
        assert.isString(put_recipe_dto.ingredients_recipes_attributes?.at(0)?.comment)
      })

      test('Check the TYPE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.instructions_recipes_attributes)
        assert.isArray(put_recipe_dto.instructions_recipes_attributes)
        assert.isNumber(put_recipe_dto.instructions_recipes_attributes?.at(0)?.id)
        assert.isNumber(put_recipe_dto.instructions_recipes_attributes?.at(0)?.step)
        assert.isString(put_recipe_dto.instructions_recipes_attributes?.at(0)?.comment)
      })

      test('Check the VALUE of all properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.strictEqual(put_recipe_dto.id, recipe.id)
        assert.strictEqual(put_recipe_dto.image, recipe.image)
        assert.strictEqual(put_recipe_dto.name, recipe.name)
        assert.strictEqual(put_recipe_dto.category_id, recipe.categoryId)
        assert.strictEqual(put_recipe_dto.country_id, recipe.countryId)
        assert.strictEqual(put_recipe_dto.user_id, recipe.userId)
        assert.strictEqual(put_recipe_dto.preparation_time, recipe.preparationTime)
        assert.strictEqual(put_recipe_dto.cooking_time, recipe.cookingTime)
        assert.strictEqual(put_recipe_dto.number_of_people, recipe.numberOfPeople)
        assert.strictEqual(put_recipe_dto.difficulty, recipe.difficulty)
        assert.strictEqual(put_recipe_dto.price, recipe.price)
        assert.strictEqual(put_recipe_dto.description, recipe.description)
      })

      test('Check the VALUE of property `kitchenware_ids` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.kitchenware_ids)
        assert.isArray(put_recipe_dto.kitchenware_ids)
        assert.deepEqual(put_recipe_dto.kitchenware_ids, recipe.kitchenwareIds)
      })

      test('Check the VALUE of property `ingredients_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.ingredients_recipes_attributes)
        assert.strictEqual(put_recipe_dto.ingredients_recipes_attributes?.length, 3)
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(0)?.id,
          recipe.ingredientsRecipesAttributes?.at(0)?.id
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(0)?.ingredient_id,
          recipe.ingredientsRecipesAttributes?.at(0)?.ingredientId
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(0)?.quantity,
          recipe.ingredientsRecipesAttributes?.at(0)?.quantity
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(0)?.measure_id,
          recipe.ingredientsRecipesAttributes?.at(0)?.measureId
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(0)?.comment,
          recipe.ingredientsRecipesAttributes?.at(0)?.comment
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(2)?.id,
          recipe.ingredientsRecipesAttributes?.at(2)?.id
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(2)?.ingredient_id,
          recipe.ingredientsRecipesAttributes?.at(2)?.ingredientId
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(2)?.quantity,
          recipe.ingredientsRecipesAttributes?.at(2)?.quantity
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(2)?.measure_id,
          recipe.ingredientsRecipesAttributes?.at(2)?.measureId
        )
        assert.strictEqual(
          put_recipe_dto.ingredients_recipes_attributes?.at(2)?.comment,
          recipe.ingredientsRecipesAttributes?.at(2)?.comment
        )
      })

      test('Check the VALUE of property `instructions_recipes_attributes` nested properties', () => {
        const recipe: Recipe = JSON.parse(JSON.stringify(dummy_recipe))
        const put_recipe_dto = RecipeMapper.toPutDTO(recipe)

        assert.exists(put_recipe_dto.instructions_recipes_attributes)
        assert.strictEqual(put_recipe_dto.ingredients_recipes_attributes?.length, 3)
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(0)?.id,
          recipe.instructionsRecipesAttributes?.at(0)?.id
        )
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(0)?.step,
          recipe.instructionsRecipesAttributes?.at(0)?.step
        )
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(0)?.comment,
          recipe.instructionsRecipesAttributes?.at(0)?.comment
        )
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(2)?.id,
          recipe.instructionsRecipesAttributes?.at(2)?.id
        )
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(2)?.step,
          recipe.instructionsRecipesAttributes?.at(2)?.step
        )
        assert.strictEqual(
          put_recipe_dto.instructions_recipes_attributes?.at(2)?.comment,
          recipe.instructionsRecipesAttributes?.at(2)?.comment
        )
      })
    })
  })
})
