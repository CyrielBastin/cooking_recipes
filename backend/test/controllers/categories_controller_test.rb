# frozen_string_literal: true

require "test_helper"

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category = categories :lamb
  end

  test 'retrieves all categories' do
    get api_categories_url
    assert_response :success
  end

  test 'creates a new category' do
    assert_difference('Category.count') do
      post api_categories_url, params:
        { category:
            { name: 'Cold Sauces',
              parent_id: categories(:sauce)[:id] } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Cold Sauces', json_response['name']
    assert_equal categories(:sauce)[:id], json_response['parent_id']
  end

  test 'shows category `lamb`' do
    get api_category_url(@category)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Lamb', json_response['name']
    assert_equal categories(:meat)[:id], json_response['parent_id']
  end

  test 'updates a category partially' do
    patch api_category_url(@category), params:
      { category:
          { name: 'Smoked Lamb' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Smoked Lamb', json_response['name']
    assert_equal categories(:meat)[:id], json_response['parent_id']
  end

  test 'updates a category fully' do
    put api_category_url(@category), params:
      { category:
          { name: 'Smoked Lamb',
            parent_id: categories(:meat)[:id] } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'Smoked Lamb', json_response['name']
    assert_equal categories(:meat)[:id], json_response['parent_id']
  end

  test 'destroys a category' do
    assert_difference('Category.count', -1) do
      delete api_category_url(@category)
    end

    assert_response :no_content
  end

end

