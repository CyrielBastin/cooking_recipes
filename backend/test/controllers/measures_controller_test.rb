# frozen_string_literal: true

require "test_helper"

class MeasuresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @measure = measures :teaspoon
  end

  test 'retrieves all measures' do
    get api_measures_url
    assert_response :success
  end

  test 'creates a new measure' do
    assert_difference('Measure.count') do
      post api_measures_url, params:
        { measure:
            { name: 'tablespoon' } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'tablespoon', json_response['name']
  end

  test 'shows measure `teaspoon`' do
    get api_measure_url(@measure)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'teaspoon', json_response['name']
  end

  test 'updates a measure partially' do
    patch api_measure_url(@measure), params:
      { measure:
          { name: 'tablespoon' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'tablespoon', json_response['name']
  end

  test 'updates a measure fully' do
    put api_measure_url(@measure), params:
      { measure:
          { name: 'tablespoon' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'tablespoon', json_response['name']
  end

  test 'destroys a measure' do
    assert_difference('Measure.count', -1) do
      delete api_measure_url(@measure)
    end

    assert_response :no_content
  end

end
