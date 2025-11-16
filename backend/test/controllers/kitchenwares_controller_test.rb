# frozen_string_literal: true

require "test_helper"

class KitchenwaresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kitchenware = kitchenwares :pan
  end

  test 'retrieves all kitchenwares' do
    get api_kitchenwares_url
    assert_response :success
  end

  test 'creates a new kitchenware' do
    assert_difference('Kitchenware.count') do
      post api_kitchenwares_url, params:
        { kitchenware:
            { image: 'kitchenwares/spatula.png',
              name: 'Spatula' } },
        as: :json
    end

    assert_response :created

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'kitchenwares/spatula.png', json_response['image']
    assert_equal 'Spatula', json_response['name']
  end

  test 'shows kitchenware `pan`' do
    get api_kitchenware_url(@kitchenware)
    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'kitchenwares/pan.png', json_response['image']
    assert_equal 'Pan', json_response['name']
  end

  test 'updates a kitchenware partially' do
    patch api_kitchenware_url(@kitchenware), params:
      { kitchenware:
          { name: 'Skillet Pan' } },
      as: :json

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'kitchenwares/pan.png', json_response['image']
    assert_equal 'Skillet Pan', json_response['name']
  end

  test 'updates a kitchenware fully' do
    put api_kitchenware_url(@kitchenware), params:
      { kitchenware:
          { image: 'kitchenwares/skillet_pan.png',
            name: 'Skillet Pan' } },
      as: :json

    assert_response :success

    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal 'kitchenwares/skillet_pan.png', json_response['image']
    assert_equal 'Skillet Pan', json_response['name']
  end

  test 'destroys a kitchenware' do
    assert_difference('Kitchenware.count', -1) do
      delete api_kitchenware_url(@kitchenware)
    end

    assert_response :no_content
  end

end
