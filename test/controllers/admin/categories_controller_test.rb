require 'test_helper'

class Admin::CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = 'en.application.local'
    @category = categories :main_course
  end

  test 'should get index' do
    get admin_categories_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_category_url

    assert_response :success
  end

  test 'should create category _en' do
    assert_difference('Category.count') do
      post admin_categories_url, params:
        { category:
            { name: 'Test Category',
              parent_id: @category.id } }
    end

    assert_equal 'Your Category was successfully created !', flash[:success]
    category = Category.last
    assert_equal 'Test Category', category.name
    assert_redirected_to admin_categories_url
  end

  test 'should show category' do
    get admin_category_url @category

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_category_url @category

    assert_response :success
  end

  test 'should update category _en' do
    patch admin_category_url @category, params:
      { category:
          { name: 'New Name' } }

    assert_equal 'Your Category was successfully updated !', flash[:success]
    category = Category.find @category.id
    assert_equal 'New Name', category.name
    assert_redirected_to admin_categories_url
  end

  test 'should destroy category' do
    assert_difference('Category.count', -1) do
      delete admin_category_url @category
    end

    assert_equal 'Your Category was successfully deleted !', flash[:success]
    assert_redirected_to admin_categories_url
  end

end
