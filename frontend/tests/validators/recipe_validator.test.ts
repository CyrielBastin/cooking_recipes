import { describe, test, assert } from 'vitest'
import type Recipe from '../../src/models/recipe'
import { RecipeValidator } from '../../src/validators/recipe_validator'
import { Validation } from '../../src/validators/validation'

const recipe: Partial<Recipe> = {
  image: 'my_new_recipe.png',
  name: 'My New Recipe',
  countryId: 3,
  categoryId: 4,
  userId: 1,
  preparationTime: null,
  cookingTime: 30,
  numberOfPeople: 4,
  difficulty: 'easy',
  price: 'low',
  description: 'Best Recipe evaaaaaa !!!',
  kitchenwareIds: [1, 2, 3],
  ingredientsRecipesAttributes: [
    {
      ingredientId: 2,
      quantity: 5,
      measureId: 1,
      comment: null
    },
    {
      ingredientId: 15,
      quantity: null,
      measureId: null,
      comment: 'Freshly baked'
    },
    {
      id: 3,
      _destroy: '1'
    }
  ],
  instructionsRecipesAttributes: [
    {
      step: 1,
      comment: 'Wash your hands'
    },
    {
      id: 24,
      _destroy: '1'
    },
    {
      step: 2,
      comment: 'Serve your hands !'
    }
  ]
}

describe('RecipeValidator', () => {
  describe('RecipeValidator.validateImage(image)', () => {
    test("doesn't validate `undefined`", () => {
      const _image = undefined
      const errors = RecipeValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _image = null
      const errors = RecipeValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _image = ''
      const errors = RecipeValidator.validateImage(_image)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'image')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test('validates a string', () => {
      const errors = RecipeValidator.validateImage(recipe.image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateName(name)', () => {
    test("doesn't validate `undefined`", () => {
      const _name = undefined
      const errors = RecipeValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non-string", () => {
      const _name = 0
      const errors = RecipeValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test("doesn't validate an empty string", () => {
      const _name = ''
      const errors = RecipeValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.blank)
    })

    test("doesn't validate a string > 100 chars", () => {
      const _name =
        'ddfamgkjfvlstokqfxvfskjdouxmypwshsolbqmvjxypfjqnrjrtwsyqoxykuazpbyliwgonoicennpvnvthjhhpjhmxphshdxjbb'
      const errors = RecipeValidator.validateName(_name)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'name')
      assert.strictEqual(errors[0].message, Validation.Messages.maximumLength(100))
    })

    test('validates a string', () => {
      const errors = RecipeValidator.validateName(recipe.name)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateCountryId(countryId)', () => {
    test('validates `undefined`', () => {
      const _country_id = undefined
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _country_id = null
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non number", () => {
      const _country_id = ''
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'countryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _country_id = 1.1
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'countryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _country_id = -1
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'countryId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _country_id = 0
      const errors = RecipeValidator.validateCountryId(_country_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'countryId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validateCountryId(recipe.countryId)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateCategoryId(categoryId)', () => {
    test("doesn't validate `undefined`", () => {
      const _category_id = undefined
      const errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non number", () => {
      let _category_id: any = null
      let errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)

      _category_id = 'not number'
      errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _category_id = 1.1
      const errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _category_id = -1
      const errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _category_id = 0
      const errors = RecipeValidator.validateCategoryId(_category_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'categoryId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validateCategoryId(recipe.categoryId)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateUserId(userId)', () => {
    test("doesn't validate `undefined`", () => {
      const _user_id = undefined
      const errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
    })

    test("doesn't validate a non number", () => {
      let _user_id: any = null
      let errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)

      _user_id = 'not number'
      errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _user_id = 1.1
      const errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _user_id = -1
      const errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _user_id = 0
      const errors = RecipeValidator.validateUserId(_user_id)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'userId')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validateUserId(recipe.userId)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validatePreparationTime(preparationTime)', () => {
    test('validates `undefined`', () => {
      const _preparation_time = undefined
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _preparation_time = null
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non number", () => {
      const _preparation_time = ''
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'preparationTime')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _preparation_time = 1.1
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'preparationTime')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _preparation_time = -1
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'preparationTime')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _preparation_time = 0
      const errors = RecipeValidator.validatePreparationTime(_preparation_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'preparationTime')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validatePreparationTime(10)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateCookingTime(cookingTime)', () => {
    test('validates `undefined`', () => {
      const _cooking_time = undefined
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _cooking_time = null
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non number", () => {
      const _cooking_time = ''
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'cookingTime')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _cooking_time = 1.1
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'cookingTime')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _cooking_time = -1
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'cookingTime')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _cooking_time = 0
      const errors = RecipeValidator.validateCookingTime(_cooking_time)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'cookingTime')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validateCookingTime(35)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateNumberOfPeople(numberOfPeople)', () => {
    test('validates `undefined`', () => {
      const _number_of_people = undefined
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _number_of_people = null
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non number", () => {
      const _number_of_people = ''
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'numberOfPeople')
      assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
    })

    test("doesn't validate a float", () => {
      const _number_of_people = 1.1
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'numberOfPeople')
      assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
    })

    test("doesn't validate a negative integer", () => {
      const _number_of_people = -1
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'numberOfPeople')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test("doesn't validate `0`", () => {
      const _number_of_people = 0
      const errors = RecipeValidator.validateNumberOfPeople(_number_of_people)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'numberOfPeople')
      assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
    })

    test('validates a strictly positive integer', () => {
      const errors = RecipeValidator.validateNumberOfPeople(3)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateDifficulty(difficulty)', () => {
    test("doesn't validate `undefined`", () => {
      const _difficulty = undefined
      const errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'difficulty')
      assert.strictEqual(errors[0].message, 'must have value: easy | normal | hard')
    })

    test("doesn't validate `null`", () => {
      const _difficulty = null
      const errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'difficulty')
      assert.strictEqual(errors[0].message, 'must have value: easy | normal | hard')
    })

    test('validates value `easy`', () => {
      const _difficulty = 'easy'
      const errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 0)
    })

    test('validates value `normal`', () => {
      const _difficulty = 'normal'
      const errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 0)
    })

    test('validates value `hard`', () => {
      const _difficulty = 'hard'
      const errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate other values", () => {
      let _difficulty: any = 1
      let errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'difficulty')
      assert.strictEqual(errors[0].message, 'must have value: easy | normal | hard')

      _difficulty = ''
      errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'difficulty')
      assert.strictEqual(errors[0].message, 'must have value: easy | normal | hard')

      _difficulty = 'Wrong Value'
      errors = RecipeValidator.validateDifficulty(_difficulty)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'difficulty')
      assert.strictEqual(errors[0].message, 'must have value: easy | normal | hard')
    })
  })

  describe('RecipeValidator.validatePrice(price)', () => {
    test("doesn't validate `undefined`", () => {
      const _price = undefined
      const errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'price')
      assert.strictEqual(errors[0].message, 'must have value: low | medium | high')
    })

    test("doesn't validate `null`", () => {
      const _price = null
      const errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'price')
      assert.strictEqual(errors[0].message, 'must have value: low | medium | high')
    })

    test('validates value `low`', () => {
      const _price = 'low'
      const errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 0)
    })

    test('validates value `medium`', () => {
      const _price = 'medium'
      const errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 0)
    })

    test('validates value `high`', () => {
      const _price = 'high'
      const errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate other values", () => {
      let _price: any = 1
      let errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'price')
      assert.strictEqual(errors[0].message, 'must have value: low | medium | high')

      _price = ''
      errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'price')
      assert.strictEqual(errors[0].message, 'must have value: low | medium | high')

      _price = 'Wrong Value'
      errors = RecipeValidator.validatePrice(_price)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'price')
      assert.strictEqual(errors[0].message, 'must have value: low | medium | high')
    })
  })

  describe('RecipeValidator.validateDescription(description)', () => {
    test('validates `undefined`', () => {
      const _description = undefined
      const errors = RecipeValidator.validateDescription(_description)
      assert.strictEqual(errors.length, 0)
    })

    test('validates `null`', () => {
      const _description = null
      const errors = RecipeValidator.validateDescription(_description)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate a non-string", () => {
      const _description = 5
      const errors = RecipeValidator.validateDescription(_description)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'description')
      assert.strictEqual(errors[0].message, Validation.Messages.notString)
    })

    test('validates an empty string', () => {
      const _description = ''
      const errors = RecipeValidator.validateDescription(_description)
      assert.strictEqual(errors.length, 0)
    })

    test('validates a string', () => {
      const errors = RecipeValidator.validateDescription(recipe.image)
      assert.strictEqual(errors.length, 0)
    })
  })

  describe('RecipeValidator.validateKitchenware(kitchenwareIds)', () => {
    test('validates `undefined`', () => {
      const _kitchenware_ids = undefined
      const errors = RecipeValidator.validateKitchenware(_kitchenware_ids)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate `null`", () => {
      const _kitchenware_ids = null
      const errors = RecipeValidator.validateKitchenware(_kitchenware_ids)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'kitchenwareIds')
      assert.strictEqual(errors[0].message, Validation.Messages.notArray)
    })

    test('validates array of positive integer', () => {
      const _kitchenware_ids = [1, 2, 3]
      const errors = RecipeValidator.validateKitchenware(_kitchenware_ids)
      assert.strictEqual(errors.length, 0)
    })

    test("doesn't validate array of mixed integer", () => {
      const _kitchenware_ids = [-1, 0, 1]
      const errors = RecipeValidator.validateKitchenware(_kitchenware_ids)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'kitchenwareIds')
      assert.strictEqual(errors[0].message, 'must contain only strictly positive integer')
    })

    test("doesn't validate array of mixed values", () => {
      const _kitchenware_ids = [-1, {}, []]
      const errors = RecipeValidator.validateKitchenware(_kitchenware_ids)
      assert.strictEqual(errors.length, 1)
      assert.strictEqual(errors[0].property, 'kitchenwareIds')
      assert.strictEqual(errors[0].message, 'must contain only strictly positive integer')
    })
  })

  describe('RecipeValidator.validateIngredients', () => {
    describe('validateIngredientDestroy(_destroy)', () => {
      test('validates value `undefined`', () => {
        const _destroy = undefined
        const errors = RecipeValidator.validateIngredientDestroy(_destroy)
        assert.strictEqual(errors.length, 0)
      })

      test('validates value `1`', () => {
        let _destroy: any = '1'
        let errors = RecipeValidator.validateIngredientDestroy(_destroy)
        assert.strictEqual(errors.length, 0)

        _destroy = 1
        errors = RecipeValidator.validateIngredientDestroy(_destroy)
        assert.strictEqual(errors.length, 0)
      })

      test("doen't validate other values", () => {
        const _destroy = 3
        const errors = RecipeValidator.validateIngredientDestroy(_destroy)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, '_destroy')
        assert.strictEqual(errors[0].message, 'must have value `1`')
      })
    })

    describe('validateIngredientId(ingredientId)', () => {
      test("doesn't validate `undefined`", () => {
        const _ingredient_id = undefined
        const errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
      })

      test("doesn't validate a non number", () => {
        let _ingredient_id: any = null
        let errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)

        _ingredient_id = 'not number'
        errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
      })

      test("doesn't validate a float", () => {
        const _ingredient_id = 1.1
        const errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
      })

      test("doesn't validate a negative integer", () => {
        const _ingredient_id = -1
        const errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test("doesn't validate `0`", () => {
        const _ingredient_id = 0
        const errors = RecipeValidator.validateIngredientId(_ingredient_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test('validates a strictly positive integer', () => {
        const errors = RecipeValidator.validateIngredientId(1)
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateIngredientQuantity(quantity)', () => {
      test('validates `undefined`', () => {
        const _quantity = undefined
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 0)
      })

      test('validates `null`', () => {
        const _quantity = null
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 0)
      })

      test("doesn't validate a non number", () => {
        const _quantity = ''
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'quantity')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
      })

      test("doesn't validate a float", () => {
        const _quantity = 1.1
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'quantity')
        assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
      })

      test("doesn't validate a negative integer", () => {
        const _quantity = -1
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'quantity')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test("doesn't validate `0`", () => {
        const _quantity = 0
        const errors = RecipeValidator.validateIngredientQuantity(_quantity)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'quantity')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test('validates a strictly positive integer', () => {
        const errors = RecipeValidator.validateIngredientQuantity(3)
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateIngredientMeasureId(measureId)', () => {
      test('validates `undefined`', () => {
        const _measure_id = undefined
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 0)
      })

      test('validates `null`', () => {
        const _measure_id = null
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 0)
      })

      test("doesn't validate a non number", () => {
        const _measure_id = ''
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'measureId')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
      })

      test("doesn't validate a float", () => {
        const _measure_id = 1.1
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'measureId')
        assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
      })

      test("doesn't validate a negative integer", () => {
        const _measure_id = -1
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'measureId')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test("doesn't validate `0`", () => {
        const _measure_id = 0
        const errors = RecipeValidator.validateIngredientMeasureId(_measure_id)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'measureId')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test('validates a strictly positive integer', () => {
        const errors = RecipeValidator.validateIngredientMeasureId(1)
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateIngredientComment(comment)', () => {
      test('validates `undefined`', () => {
        const _comment = undefined
        const errors = RecipeValidator.validateIngredientComment(_comment)
        assert.strictEqual(errors.length, 0)
      })

      test('validates `null`', () => {
        const _comment = null
        const errors = RecipeValidator.validateIngredientComment(_comment)
        assert.strictEqual(errors.length, 0)
      })

      test("doesn't validate a non-string", () => {
        const _comment = 5
        const errors = RecipeValidator.validateIngredientComment(_comment)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'comment')
        assert.strictEqual(errors[0].message, Validation.Messages.notString)
      })

      test('validates an empty string', () => {
        const _comment = ''
        const errors = RecipeValidator.validateIngredientComment(_comment)
        assert.strictEqual(errors.length, 0)
      })

      test('validates a string', () => {
        const errors = RecipeValidator.validateIngredientComment('abc')
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateIngredients(ingredients)', () => {
      test('returns false if not valid', () => {
        const _ingredients = [
          {
            ingredientId: 'a',
            quantity: -1,
            measureId: 2,
            comment: {}
          }
        ]

        assert.isFalse(RecipeValidator.validateIngredients(_ingredients))
        assert.property(_ingredients[0], 'errors')
        const errors = _ingredients[0]['errors']
        assert.strictEqual(errors.length, 3)
        assert.strictEqual(errors[0].property, 'ingredientId')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
        assert.strictEqual(errors[1].property, 'quantity')
        assert.strictEqual(errors[1].message, Validation.Messages.negativeNumber)
        assert.strictEqual(errors[2].property, 'comment')
        assert.strictEqual(errors[2].message, Validation.Messages.notString)
      })

      test("doesn't validate other properties if `_destroy` is present and `1`", () => {
        const _ingredients = [
          {
            id: 2,
            ingredientId: 'a',
            quantity: -1,
            measureId: 2,
            comment: {},
            _destroy: '1'
          }
        ]

        assert.isTrue(RecipeValidator.validateIngredients(_ingredients))
      })

      test('validates other properties if `_destroy` is not valid', () => {
        const _ingredients = [
          {
            id: 2,
            ingredientId: 'a',
            _destroy: 3
          }
        ]

        assert.isFalse(RecipeValidator.validateIngredients(_ingredients))
        assert.property(_ingredients[0], 'errors')
        const errors = _ingredients[0]['errors']
        assert.strictEqual(errors.length, 2)
        assert.strictEqual(errors[0].property, '_destroy')
        assert.strictEqual(errors[0].message, 'must have value `1`')
        assert.strictEqual(errors[1].property, 'ingredientId')
        assert.strictEqual(errors[1].message, Validation.Messages.notNumber)
      })

      test('refreshes `errors` property when we call `validate`', () => {
        const _ingredients: any = [
          {
            ingredientId: 'a',
            quantity: -1,
            measureId: 2,
            comment: {}
          }
        ]

        assert.isFalse(RecipeValidator.validateIngredients(_ingredients))
        assert.property(_ingredients[0], 'errors')

        _ingredients[0].ingredientId = 1
        _ingredients[0].quantity = 3
        _ingredients[0].comment = null

        assert.isTrue(RecipeValidator.validateIngredients(_ingredients))
        assert.notProperty(_ingredients[0], 'errors')
      })

      test('returns true if valid', () => {
        const _ingredients = JSON.parse(JSON.stringify(recipe.ingredientsRecipesAttributes))

        assert.isTrue(RecipeValidator.validateIngredients(_ingredients))
        _ingredients.forEach((ingredient) => {
          assert.notProperty(ingredient, 'errors')
        })
      })
    })
  })

  describe('RecipeValidator.validateInstructions', () => {
    describe('validateInstructionDestroy(_destroy)', () => {
      test('validates value `undefined`', () => {
        const _destroy = undefined
        const errors = RecipeValidator.validateInstructionDestroy(_destroy)
        assert.strictEqual(errors.length, 0)
      })

      test('validates value `1`', () => {
        let _destroy: any = '1'
        let errors = RecipeValidator.validateInstructionDestroy(_destroy)
        assert.strictEqual(errors.length, 0)

        _destroy = 1
        errors = RecipeValidator.validateInstructionDestroy(_destroy)
        assert.strictEqual(errors.length, 0)
      })

      test("doen't validate other values", () => {
        const _destroy = 3
        const errors = RecipeValidator.validateInstructionDestroy(_destroy)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, '_destroy')
        assert.strictEqual(errors[0].message, 'must have value `1`')
      })
    })

    describe('validateInstructionStep(step)', () => {
      test("doesn't validate `undefined`", () => {
        const _step = undefined
        const errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
      })

      test("doesn't validate a non number", () => {
        let _step: any = null
        let errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)

        _step = 'not number'
        errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.notNumber)
      })

      test("doesn't validate a float", () => {
        const _step = 1.1
        const errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.notInteger)
      })

      test("doesn't validate a negative integer", () => {
        const _step = -1
        const errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test("doesn't validate `0`", () => {
        const _step = 0
        const errors = RecipeValidator.validateInstructionStep(_step)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
      })

      test('validates a strictly positive integer', () => {
        const errors = RecipeValidator.validateInstructionStep(1)
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateInstructionComment(comment)', () => {
      test("doesn't validate `undefined`", () => {
        const _comment = undefined
        const errors = RecipeValidator.validateInstructionComment(_comment)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'comment')
        assert.strictEqual(errors[0].message, Validation.Messages.notDefined)
      })

      test("doesn't validate a non-string", () => {
        const _comment = null
        const errors = RecipeValidator.validateInstructionComment(_comment)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'comment')
        assert.strictEqual(errors[0].message, Validation.Messages.notString)
      })

      test("doesn't validate an empty string", () => {
        const _comment = ''
        const errors = RecipeValidator.validateInstructionComment(_comment)
        assert.strictEqual(errors.length, 1)
        assert.strictEqual(errors[0].property, 'comment')
        assert.strictEqual(errors[0].message, Validation.Messages.blank)
      })

      test('validates a string', () => {
        const errors = RecipeValidator.validateInstructionComment('Hello World')
        assert.strictEqual(errors.length, 0)
      })
    })

    describe('validateInstructions(instructions)', () => {
      test('returns false if not valid', () => {
        const _instructions = [
          {
            step: 0,
            comment: ''
          }
        ]

        assert.isFalse(RecipeValidator.validateInstructions(_instructions))
        assert.property(_instructions[0], 'errors')
        const errors = _instructions[0]['errors']
        assert.strictEqual(errors.length, 2)
        assert.strictEqual(errors[0].property, 'step')
        assert.strictEqual(errors[0].message, Validation.Messages.negativeNumber)
        assert.strictEqual(errors[1].property, 'comment')
        assert.strictEqual(errors[1].message, Validation.Messages.blank)
      })

      test("doesn't validate other properties if `_destroy` is present and `1`", () => {
        const _instructions = [
          {
            id: 2,
            step: 'a',
            comment: {},
            _destroy: '1'
          }
        ]

        assert.isTrue(RecipeValidator.validateInstructions(_instructions))
      })

      test('validates other properties if `_destroy` is not valid', () => {
        const _instructions = [
          {
            id: 2,
            step: 'a',
            _destroy: []
          }
        ]

        assert.isFalse(RecipeValidator.validateInstructions(_instructions))
        assert.property(_instructions[0], 'errors')
        const errors = _instructions[0]['errors']
        assert.strictEqual(errors.length, 3)
        assert.strictEqual(errors[0].property, '_destroy')
        assert.strictEqual(errors[0].message, 'must have value `1`')
        assert.strictEqual(errors[1].property, 'step')
        assert.strictEqual(errors[1].message, Validation.Messages.notNumber)
        assert.strictEqual(errors[2].property, 'comment')
        assert.strictEqual(errors[2].message, Validation.Messages.notDefined)
      })

      test('refreshes `errors` property when we call `validate`', () => {
        const _instructions: any = [
          {
            step: 'a',
            comment: {}
          }
        ]

        assert.isFalse(RecipeValidator.validateInstructions(_instructions))
        assert.property(_instructions[0], 'errors')

        _instructions[0].step = 1
        _instructions[0].comment = 'abc'

        assert.isTrue(RecipeValidator.validateInstructions(_instructions))
        assert.notProperty(_instructions[0], 'errors')
      })

      test('returns true if valid', () => {
        const _instructions = JSON.parse(JSON.stringify(recipe.instructionsRecipesAttributes))

        assert.isTrue(RecipeValidator.validateInstructions(_instructions))
        _instructions.forEach((instruction) => {
          assert.notProperty(instruction, 'errors')
        })
      })
    })
  })

  describe('RecipeValidator.isValid(recipe)', () => {
    test('returns false if not valid', () => {
      const _recipe = JSON.parse(JSON.stringify(recipe))
      _recipe.name = null
      _recipe.userId = -1
      _recipe.ingredientsRecipesAttributes[0].ingredientId = 'a'

      assert.isNotTrue(RecipeValidator.isValid(_recipe))
      assert.isDefined(_recipe.errors)
      assert.strictEqual(_recipe.errors.length, 2)
      assert.strictEqual(_recipe.errors[0].property, 'name')
      assert.strictEqual(_recipe.errors[0].message, Validation.Messages.notString)
      assert.strictEqual(_recipe.errors[1].property, 'userId')
      assert.strictEqual(_recipe.errors[1].message, Validation.Messages.negativeNumber)

      assert.isDefined(_recipe.ingredientsRecipesAttributes[0].errors)
      const ingredient_errors = _recipe.ingredientsRecipesAttributes[0].errors
      assert.strictEqual(ingredient_errors.length, 1)
      assert.strictEqual(ingredient_errors[0].property, 'ingredientId')
      assert.strictEqual(ingredient_errors[0].message, Validation.Messages.notNumber)

      // Makes sure it resets `recipe.errors` when we check whether it is valid or not
      _recipe.userId = 1
      _recipe.ingredientsRecipesAttributes[0].ingredientId = 1
      assert.isNotTrue(RecipeValidator.isValid(_recipe))
      assert.property(_recipe, 'errors')
      assert.isDefined(_recipe.errors)
      assert.strictEqual(_recipe.errors.length, 1)
      assert.strictEqual(_recipe.errors[0].property, 'name')
      assert.strictEqual(_recipe.errors[0].message, Validation.Messages.notString)
      assert.notProperty(_recipe.ingredientsRecipesAttributes[0], 'errors')
    })

    test('returns false if `ingredients` is not valid', () => {
      const _recipe = JSON.parse(JSON.stringify(recipe))
      assert.isTrue(RecipeValidator.isValid(_recipe))

      _recipe.ingredientsRecipesAttributes[0].ingredientId = 'a'

      assert.isFalse(RecipeValidator.isValid(_recipe))
      assert.isDefined(_recipe.ingredientsRecipesAttributes[0], 'errors')
      const ingredient_errors = _recipe.ingredientsRecipesAttributes[0].errors
      assert.strictEqual(ingredient_errors.length, 1)
      assert.strictEqual(ingredient_errors[0].property, 'ingredientId')
      assert.strictEqual(ingredient_errors[0].message, Validation.Messages.notNumber)
    })

    test('returns false if `instructions` is not valid', () => {
      const _recipe = JSON.parse(JSON.stringify(recipe))
      assert.isTrue(RecipeValidator.isValid(_recipe))

      _recipe.instructionsRecipesAttributes[0].comment = ''

      assert.isFalse(RecipeValidator.isValid(_recipe))
      assert.isDefined(_recipe.instructionsRecipesAttributes[0], 'errors')
      const instruction_errors = _recipe.instructionsRecipesAttributes[0].errors
      assert.strictEqual(instruction_errors.length, 1)
      assert.strictEqual(instruction_errors[0].property, 'comment')
      assert.strictEqual(instruction_errors[0].message, Validation.Messages.blank)
    })

    test('returns true if valid', () => {
      const _recipe = JSON.parse(JSON.stringify(recipe))

      assert.isTrue(RecipeValidator.isValid(_recipe))
      assert.notProperty(_recipe, 'errors')
      _recipe.ingredientsRecipesAttributes.forEach((ingredient) => {
        assert.notProperty(ingredient, 'errors')
      })
      _recipe.instructionsRecipesAttributes.forEach((instruction) => {
        assert.notProperty(instruction, 'errors')
      })
    })
  })
})
