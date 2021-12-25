require 'test_helper'
require_relative '../../../config/url'

class Admin::IngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = Url::DEV_EN_URL
    @ingredient = ingredients :potato
  end

  test 'should get index' do
    get admin_ingredients_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_ingredient_url

    assert_response :success
  end

  test 'should create ingredient _en' do
    assert_difference('Ingredient.count') do
      post admin_ingredients_url, params:
        { ingredient:
            { name: 'Test Ingredient',
              image: '/ingredients/test_ingredient.png' } }
    end

    assert_equal 'Your Ingredient was successfully created !', flash[:success]
    ingredient = Ingredient.last
    assert_equal 'Test Ingredient', ingredient.name
    assert_equal '/ingredients/test_ingredient.png', ingredient.image
    assert_redirected_to admin_ingredients_url
  end

  test 'should show ingredient' do
    get admin_ingredient_url @ingredient

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_ingredient_url @ingredient

    assert_response :success
  end

  test 'should update ingredient _en' do
    patch admin_ingredient_url @ingredient, params:
      { ingredient:
          { name: 'New Name' } }

    assert_equal 'Your Ingredient was successfully updated !', flash[:success]
    ingredient = Ingredient.find @ingredient.id
    assert_equal 'New Name', ingredient.name
    assert_redirected_to admin_ingredients_url
  end

  test 'should destroy ingredient' do
    assert_difference('Ingredient.count', -1) do
      delete admin_ingredient_url @ingredient
    end

    assert_equal 'Your Ingredient was successfully deleted !', flash[:success]
    assert_redirected_to admin_ingredients_url
  end

end
