require 'test_helper'

class Admin::CountriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    default_url_options[:host] = 'en.application.local'
    @country = countries :france
  end

  test 'should get index' do
    get admin_countries_url

    assert_response :success
  end

  test 'should get new' do
    get new_admin_country_url

    assert_response :success
  end

  test 'should create country _en' do
    assert_difference('Country.count') do
      post admin_countries_url, params:
        { country:
            { name: 'Test Country',
              image: 'superb/image.png' } }
    end

    assert_equal 'Your Country was successfully created !', flash[:success]
    country = Country.last
    assert_equal 'Test Country', country.name
    assert_equal 'superb/image.png', country.image
    assert_redirected_to admin_countries_url
  end

  test 'should show country' do
    get admin_country_url @country

    assert_response :success
  end

  test 'should get edit' do
    get edit_admin_country_url @country

    assert_response :success
  end

  test 'should update country _en' do
    patch admin_country_url @country, params:
      { country:
          { image: 'new/image.jpg' } }

    assert_equal 'Your Country was successfully updated !', flash[:success]
    country = Country.find @country.id
    assert_equal 'new/image.jpg', country.image
    assert_redirected_to admin_countries_url
  end

  test 'should destroy country' do
    assert_difference('Country.count', -1) do
      delete admin_country_url @country
    end

    assert_equal 'Your Country was successfully deleted !', flash[:success]
    assert_redirected_to admin_countries_url
  end

end
