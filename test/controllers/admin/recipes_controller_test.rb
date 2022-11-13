require 'test_helper'
require_relative '../../../config/url'

class Admin::RecipesControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = Url::DEV_EN_URL
    @recipe = recipes :tartiflette
  end

  test 'should get index' do
    get admin_recipes_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_recipe_url

    assert_response :success
  end

  test 'should create recipe _en' do
    assert_difference('Recipe.count') do
      post admin_recipes_url, params:
        { recipe:
            { name: 'Test Recipe',
              category_id: categories(:sauce).id,
              user_id: users(:grimm).id,
              number_of_people: 5,
              difficulty: 'hard',
              price: 'high',
              image: 'recipes/image.png',
              user_comment: 'Blah Blah Blah' } }
    end

    assert_equal 'Your Recipe was successfully created !', flash[:success]
    recipe = Recipe.last
    assert_equal 'Test Recipe', recipe.name
    assert recipe.difficulty_hard?
    assert recipe.high_price?
    assert_redirected_to admin_recipes_url
  end

  test 'should show recipe' do
    get admin_recipe_url @recipe

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_recipe_url @recipe

    assert_response :success
  end

  test 'should update recipe _en' do
    patch admin_recipe_url @recipe, params:
      { recipe:
          { name: 'New Name',
            preparation_time: 70,
            cooking_time: 30 } }

    assert_equal 'Your Recipe was successfully updated !', flash[:success]
    recipe = Recipe.find @recipe.id
    assert_equal 'New Name', recipe.name
    assert_equal 70, recipe.preparation_time
    assert_equal 30, recipe.cooking_time
    assert_redirected_to admin_recipes_url
  end

  test 'should destroy recipe' do
    assert_difference('Recipe.count', -1) do
      delete admin_recipe_url @recipe
    end

    assert_equal 'Your Recipe was successfully deleted !', flash[:success]
    assert_redirected_to admin_recipes_url
  end

end
