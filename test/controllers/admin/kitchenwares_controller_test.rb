require 'test_helper'

class Admin::KitchenwaresControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = 'en.application.local'
    @kitchenware = kitchenwares :pan
  end

  test 'should get index' do
    get admin_kitchenwares_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_kitchenware_url

    assert_response :success
  end

  test 'should create kitchenware _en' do
    assert_difference('Kitchenware.count') do
      post admin_kitchenwares_url, params:
        { kitchenware:
            { name: 'Test Kitchenware',
              image: '/kitchenwares/test_kitchenware.png' } }
    end

    assert_equal 'Your Kitchenware was successfully created !', flash[:success]
    kitchenware = Kitchenware.last
    assert_equal 'Test Kitchenware', kitchenware.name
    assert_equal '/kitchenwares/test_kitchenware.png', kitchenware.image
    assert_redirected_to admin_kitchenwares_url
  end

  test 'should show kitchenware' do
    get admin_kitchenware_url @kitchenware

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_kitchenware_url @kitchenware

    assert_response :success
  end

  test 'should update kitchenware _en' do
    patch admin_kitchenware_url @kitchenware, params:
      { kitchenware:
          { name: 'New Name' } }

    assert_equal 'Your Kitchenware was successfully updated !', flash[:success]
    kitchenware = Kitchenware.find @kitchenware.id
    assert_equal 'New Name', kitchenware.name
    assert_redirected_to admin_kitchenwares_url
  end

  test 'should destroy kitchenware' do
    assert_difference('Kitchenware.count', -1) do
      delete admin_kitchenware_url @kitchenware
    end

    assert_equal 'Your Kitchenware was successfully deleted !', flash[:success]
    assert_redirected_to admin_kitchenwares_url
  end

end
