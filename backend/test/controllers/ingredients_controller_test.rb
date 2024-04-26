# frozen_string_literal: true

require "test_helper"

class IngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ingredient = ingredients :onion
  end

  test 'retrieves all ingredients' do
    get api_ingredients_url
    assert_response :success
  end

  test 'creates a new ingredient' do
    assert_difference('Ingredient.count') do
      post api_ingredients_url, params:
        { ingredient:
            { image: 'ingredients/rutabaga.png',
              name: 'Rutabaga' } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'ingredients/rutabaga.png', json_response['image']
    assert_equal 'Rutabaga', json_response['name']
  end

  test 'shows ingredient `onion`' do
    get api_ingredient_url(@ingredient)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'ingredients/onion.png', json_response['image']
    assert_equal 'Onion', json_response['name']
  end

  test 'updates an ingredient partially' do
    patch api_ingredient_url(@ingredient), params:
      { ingredient:
          { name: 'Dry Onion' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'ingredients/onion.png', json_response['image']
    assert_equal 'Dry Onion', json_response['name']
  end

  test 'updates an ingredient fully' do
    put api_ingredient_url(@ingredient), params:
      { ingredient:
          { image: 'ingredients/dry_onion.png',
            name: 'Dry Onion' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'ingredients/dry_onion.png', json_response['image']
    assert_equal 'Dry Onion', json_response['name']
  end

  test 'destroys an ingredient' do
    assert_difference('Ingredient.count', -1) do
      delete api_ingredient_url(@ingredient)
    end

    assert_response :no_content
  end

end
