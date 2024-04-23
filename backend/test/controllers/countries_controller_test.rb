# frozen_string_literal: true

require "test_helper"

class CountriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @country = countries(:france)
  end

  test 'retrieves all countries' do
    get api_countries_url
    assert_response :success
  end

  test 'creates a new country' do
    assert_difference('Country.count') do
      post api_countries_url, params:
        { country:
            { image: 'countries/belgium.png',
              name: 'Belgium' } }
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'countries/belgium.png', json_response['image']
    assert_equal 'Belgium', json_response['name']
  end

  test 'shows country `france`' do
    get api_country_url(@country)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'countries/france.png', json_response['image']
    assert_equal 'France', json_response['name']
  end

  test 'updates a country partially' do
    patch api_country_url(@country), params:
      { country:
          { name: 'Francia' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'countries/france.png', json_response['image']
    assert_equal 'Francia', json_response['name']
  end

  test 'updates a country fully' do
    put api_country_url(@country), params:
      { country:
          { image: 'countries/francia.png',
            name: 'Francia' } }

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'countries/francia.png', json_response['image']
    assert_equal 'Francia', json_response['name']
  end

  test 'destroys a country' do
    assert_difference('Country.count', -1) do
      delete api_country_url(@country)
    end

    assert_response :no_content
  end

end
