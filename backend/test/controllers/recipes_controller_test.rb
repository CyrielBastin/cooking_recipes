# frozen_string_literal: true

require "test_helper"

class RecipesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recipe = recipes :tartiflette
  end

  test 'retrieves all recipes' do
    get api_recipes_url
    assert_response :success
  end

  test 'creates a new recipe' do
    assert_difference('Recipe.count') do
      post api_recipes_url, params:
        { recipe:
            { image: 'recipes/carbonara_1.png',
              name: 'Pasta Carbonara',
              category_id: categories(:main_course)[:id],
              country_id: countries(:italy)[:id],
              user_id: users(:grimm)[:id],
              preparation_time: 10,
              cooking_time: 10,
              number_of_people: 2,
              difficulty: 'easy',
              price: 'low',
              description: 'Best Carbo Ever' } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'recipes/carbonara_1.png', json_response['image']
    assert_equal 'Pasta Carbonara', json_response['name']
    assert_equal 'Main Course', json_response['category']['name']
    assert_equal 'Italy', json_response['country']['name']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
    assert_equal 10, json_response['preparation_time']
    assert_equal 10, json_response['cooking_time']
    assert_equal 2, json_response['number_of_people']
    assert_equal 'easy', json_response['difficulty']
    assert_equal 'low', json_response['price']
    assert_equal 'Best Carbo Ever', json_response['description']
  end

  test 'shows recipe `tartiflette`' do
    get api_recipe_url(@recipe)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'recipes/tartiflette.png', json_response['image']
    assert_equal 'Tartiflette', json_response['name']
    assert_equal 'Main Course', json_response['category']['name']
    assert_equal 'France', json_response['country']['name']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
    assert_equal 30, json_response['preparation_time']
    assert_equal 20, json_response['cooking_time']
    assert_equal 3, json_response['number_of_people']
    assert_equal 'easy', json_response['difficulty']
    assert_equal 'medium', json_response['price']
    assert_equal 'In Tartiflette we trust !', json_response['description']
  end

  test 'updates a recipe partially' do
    patch api_recipe_url(@recipe), params:
      { recipe:
          { name: 'Godlike Tartiflette',
            price: 'high' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'recipes/tartiflette.png', json_response['image']
    assert_equal 'Godlike Tartiflette', json_response['name']
    assert_equal 'Main Course', json_response['category']['name']
    assert_equal 'France', json_response['country']['name']
    assert_equal 'grimm@grimm.com', json_response['user']['email']
    assert_equal 30, json_response['preparation_time']
    assert_equal 20, json_response['cooking_time']
    assert_equal 3, json_response['number_of_people']
    assert_equal 'easy', json_response['difficulty']
    assert_equal 'high', json_response['price']
    assert_equal 'In Tartiflette we trust !', json_response['description']
  end

  test 'updates a recipe to add kitchenwares' do
    patch api_recipe_url(@recipe), params:
      { kitchenwares: '1',
        recipe:
          { kitchenware_ids: [kitchenwares(:oven)[:id], kitchenwares(:pan)[:id]] } }

    assert_response :success
    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Tartiflette', json_response['name']
    assert_equal 2, @recipe.kitchenwares.size
    assert_equal 2, json_response['kitchenwares'].size
    assert(json_response['kitchenwares'].any? { |k| k['name'] == 'Oven' })
    assert(json_response['kitchenwares'].any? { |k| k['name'] == 'Pan' })
  end

  test 'adds `blanquette` ingredients' do
    patch api_recipe_url(@recipe), params:
      { ingredients: '1',
        recipe:
          { ingredients_recipes_attributes: [
            { ingredient_id: ingredients(:onion)[:id],
              quantity: 2,
              measure_id: measures(:unit)[:id] },
            { ingredient_id: ingredients(:potato)[:id],
              quantity: 20,
              measure_id: measures(:unit)[:id],
              comment: 'Bintje or Yukon Gold' },
            { ingredient_id: ingredients(:salt)[:id] }
          ] } }

    assert_response :success
    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Tartiflette', json_response['name']
    assert_equal 3, json_response['ingredients'].size
    assert(json_response['ingredients'].any? { |i| i['name'] == 'Onion' })
    assert(json_response['ingredients'].any? { |i| i['name'] == 'Potato' })
    assert(json_response['ingredients'].any? { |i| i['name'] == 'Salt' })
  end

  # test 'updates `bolognese` ingredients' do
  #   patch api_recipe_url(recipes(:bolognese)[:id]), params:
  #     { recipe:
  #         { ingredients_recipes_attributes: [
  #           { id: ingredients_recipes(:bolo_onion)[:id],
  #             quantity: 3,
  #             comment: 'We add 1 extra onion' },
  #           { id: ingredients_recipes(:bolo_tomato)[:id],
  #             _destroy: 1 },
  #           { ingredient_id: ingredients(:salt)[:id] }
  #         ] } }
  #
  #   assert_response :success
  #   json_response = ActiveSupport::JSON.decode @response.body
  #   assert_equal 'Bolognese', json_response['name']
  #   assert_equal 3, json_response['ingredients'].size
  #   assert(json_response['ingredients'].any? { |i| i['name'] == 'Onion' })
  #   assert_not(json_response['ingredients'].any? { |i| i['name'] == 'Tomato' })
  #   assert(json_response['ingredients'].any? { |i| i['name'] == 'Parsley' })
  #   assert(json_response['ingredients'].any? { |i| i['name'] == 'Salt' })
  # end

  test 'adds `blanquette` instructions' do
    patch api_recipe_url(@recipe), params:
      { instructions: '1',
        recipe:
          { instructions_recipes_attributes: [
            { step: 1,
              comment: 'Wash your hands.' },
            { step: 2,
              comment: 'Cut the potatoes.' },
            { step: 3,
              comment: 'Cut the onions.' }
          ] } }

    assert_response :success
    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Tartiflette', json_response['name']
    assert_equal 3, json_response['instructions'].size
    assert_equal 'Wash your hands.', json_response['instructions'].at(0)['comment']
    assert_equal 'Cut the potatoes.', json_response['instructions'].at(1)['comment']
    assert_equal 'Cut the onions.', json_response['instructions'].at(2)['comment']
  end

  # test 'updates `bolognese` instructions' do
  #   patch api_recipe_url(recipes(:bolognese)[:id]), params:
  #     { recipe:
  #         { instructions_recipes_attributes: [
  #           { id: instructions_recipes(:bolo_step_one)[:id],
  #             _destroy: 1 },
  #           { id: instructions_recipes(:bolo_step_two)[:id],
  #             step: 1,
  #             comment: 'Wash your hands, please!' }
  #         ] } }
  #
  #   assert_response :success
  #   json_response = ActiveSupport::JSON.decode @response.body
  #   assert_equal 'Bolognese', json_response['name']
  #   assert_equal 1, json_response['instructions'].size
  #   assert_equal 'Wash your hands, please!', json_response['instructions'].at(0)['comment']
  # end
  #
  # test 'updates a recipe fully' do
  #   put api_recipe_url(recipes(:bolognese)[:id]), params:
  #     { recipe:
  #         { image: 'recipes/bolognese.png',
  #           name: 'Tomatoless Bolognese',
  #           category_id: categories(:main_course)[:id],
  #           country_id: countries(:italy)[:id],
  #           user_id: users(:grimm)[:id],
  #           preparation_time: 35,
  #           cooking_time: 15,
  #           number_of_people: 5,
  #           difficulty: 'hard',
  #           price: 'high',
  #           description: 'Yes a Bolognese without tomatoes. What you gonna do about it',
  #           kitchenware_ids: [kitchenwares(:pan)[:id]],
  #           ingredients_recipes_attributes: [
  #             { id: ingredients_recipes(:bolo_onion)[:id],
  #               ingredient_id: ingredients(:onion)[:id],
  #               quantity: 2,
  #               measure_id: measures(:unit)[:id],
  #               comment: 'Just 2 Onions' },
  #             { id: ingredients_recipes(:bolo_tomato)[:id],
  #               _destroy: 1 },
  #             { id: ingredients_recipes(:bolo_parsley)[:id],
  #               _destroy: 1 }
  #           ],
  #           instructions_recipes_attributes: [
  #             { id: instructions_recipes(:bolo_step_one)[:id],
  #               step: 1,
  #               comment: 'Step 1' },
  #             { id: instructions_recipes(:bolo_step_two)[:id],
  #               step: 2,
  #               comment: 'Step 2' }
  #           ] } }
  #
  #   assert_response :success
  #
  #   json_response = ActiveSupport::JSON.decode @response.body
  #   assert_equal 'recipes/bolognese.png', json_response['image']
  #   assert_equal 'Tomatoless Bolognese', json_response['name']
  #   assert_equal 'Main Course', json_response['category']['name']
  #   assert_equal 'Italy', json_response['country']['name']
  #   assert_equal 'grimm@grimm.com', json_response['user']['email']
  #   assert_equal 35, json_response['preparation_time']
  #   assert_equal 15, json_response['cooking_time']
  #   assert_equal 5, json_response['number_of_people']
  #   assert_equal 'hard', json_response['difficulty']
  #   assert_equal 'high', json_response['price']
  #   assert_equal 'Yes a Bolognese without tomatoes. What you gonna do about it', json_response['description']
  #   assert_equal 1, json_response['kitchenwares'].size
  #   assert(json_response['kitchenwares'].any? { |k| k['name'] == 'Pan' })
  #   # assert_equal 1, json_response['ingredients'].size
  #   # assert(json_response['ingredients'].any? { |i| i['name'] == 'Onion' })
  #   # onion = json_response['ingredients'].filter { |i| i['name'] == 'Onion' }
  #   # assert_equal 2, onion.at(0)['quantity']
  #   assert_equal 2, json_response['instructions'].size
  #   assert_equal 'Step 1', json_response['instructions'].at(0)['comment']
  #   assert_equal 'Step 2', json_response['instructions'].at(1)['comment']
  # end

  test 'destroys a recipe' do
    assert_difference('Recipe.count', -1) do
      delete api_recipe_url(@recipe)
    end

    assert_response :no_content
  end

end
